from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .serializers import RegisterSerializer
from .models import CustomUser

import random
from django.core.mail import send_mail
from django.core.cache import cache

from .tasks import send_otp_email


# LOGIN SERIALIZER
class LoginSerializer(TokenObtainPairSerializer):
    username_field = 'email'


# LOGIN VIEW
class LoginView(TokenObtainPairView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]


# REGISTER VIEW
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):

        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

            # send OTP via celery
            send_otp_email.delay(user.email)

            return Response(
                {"message": "User registered successfully. OTP sent to email"},
                status=status.HTTP_201_CREATED
            )

        # 🔴 THIS LINE FIXES YOUR 500 ERROR
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# VERIFY OTP VIEW
class VerifyOTPView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):

        email = request.data.get("email")
        otp = request.data.get("otp")

        stored_otp = cache.get(email)

        if stored_otp is None:
            return Response({"error": "OTP expired"}, status=400)

        if stored_otp != otp:
            return Response({"error": "Invalid OTP"}, status=400)

        cache.delete(email)

        user = CustomUser.objects.get(email=email)
        user.is_verified = True
        user.save()

        return Response({"message": "Email verified successfully"})


# PROFILE VIEW (PROTECTED)
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "email": request.user.email,
            "full_name": request.user.full_name,
            "role": request.user.role
        })


# FORGOT PASSWORD VIEW
class ForgotPasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):

        email = request.data.get("email")

        try:
            user = CustomUser.objects.get(email=email)

            otp = str(random.randint(100000, 999999))
            user.otp = otp
            user.save()

            send_mail(
                "Password Reset OTP",
                f"Your OTP is {otp}",
                "yourgmail@gmail.com",
                [email],
                fail_silently=False,
            )

            return Response({
                "message": "OTP sent to email",
                "OTP_Code": otp
            })

        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=404)


# RESET PASSWORD VIEW
class ResetPasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):

        email = request.data.get("email")
        otp = request.data.get("otp")
        new_password = request.data.get("new_password")

        try:
            user = CustomUser.objects.get(email=email)

            if user.otp == otp:
                user.set_password(new_password)
                user.otp = None
                user.save()

                return Response({"message": "Password reset successful"})

            return Response({"error": "Invalid OTP"}, status=400)

        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=404)