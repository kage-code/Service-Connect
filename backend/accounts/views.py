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

# LOGIN SERIALIZER
class LoginSerializer(TokenObtainPairSerializer):
    username_field = 'email'


# LOGIN VIEW
class LoginView(TokenObtainPairView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]


# REGISTER VIEW
import random

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

            # Generate OTP
            otp = str(random.randint(100000, 999999))

            # Save OTP
            user.otp = otp
            user.save()

            return Response(
                {
                    "message": "User registered successfully.",
                    "OTP_Code": otp
                },
                status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# VERIFY OTP VIEW
class VerifyOTPView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        otp = request.data.get("otp")

        try:
            user = CustomUser.objects.get(email=email)

            if user.otp == otp:
                user.is_verified = True
                user.otp = None
                user.save()

                return Response({"message": "Email verified successfully"})

            return Response({"error": "Invalid OTP"}, status=400)

        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=404)


# PROFILE VIEW (PROTECTED)
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "email": request.user.email,
            "full_name": request.user.full_name,
            "role": request.user.role
        })
    

#forget password view
class ForgotPasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")

        try:
            user = CustomUser.objects.get(email=email)

            otp = str(random.randint(100000, 999999))
            user.otp = otp
            user.save()

            # send OTP email
            send_mail(
                "Password Reset OTP",
                f"Your OTP is {otp}",
                "yourgmail@gmail.com",
                [email],
                fail_silently=False,
            )

            return Response({
                "message": "OTP sent to email",
                "OTP_Code": otp   # keep this only for testing
            })

        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=404)

 #reset password view       
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