from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.db import models as django_models
from django.core.mail import send_mail

from .models import CustomUser, Category, Service, ProviderProfile, Booking, Review, Card, Complaint, UserProfile
from .serializers import (
    RegisterSerializer,
    CategorySerializer,
    ServiceSerializer,
    ProviderProfileSerializer,
    BookingSerializer,
    ReviewSerializer,
    CardSerializer,
    ComplaintSerializer,
    UserProfileSerializer,
)
import random


# ─── AUTH ───────────────────────────────────────────────────────────────────

class LoginSerializer(TokenObtainPairSerializer):
    username_field = 'email'


class LoginView(TokenObtainPairView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            otp = str(random.randint(1000, 9999))
            user.otp = otp
            user.save()
            return Response(
                {"message": "User registered successfully.", "OTP_Code": otp},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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


class ForgotPasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        try:
            user = CustomUser.objects.get(email=email)
            otp = str(random.randint(1000, 9999))
            user.otp = otp
            user.save()
            send_mail(
                "Password Reset OTP",
                f"Your OTP is {otp}",
                "yourgmail@gmail.com",
                [email],
                fail_silently=False,
            )
            return Response({"message": "OTP sent to email", "OTP_Code": otp})  # remove OTP_Code in production
        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=404)


@api_view(['POST'])
def verify_reset_otp(request):
    email = request.data.get('email')
    otp = request.data.get('otp')
    try:
        user = CustomUser.objects.get(email=email)
    except CustomUser.DoesNotExist:
        return Response({'error': 'User not found.'}, status=404)
    if user.otp != otp:
        return Response({'error': 'Invalid OTP.'}, status=400)
    return Response({'message': 'OTP verified.'})


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


class ProfileView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "email": request.user.email,
            "full_name": request.user.full_name,
            "role": request.user.role
        })


# ─── CATEGORIES ─────────────────────────────────────────────────────────────

class CategoryListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        categories = Category.objects.filter(parent=None)
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# ─── SERVICES ───────────────────────────────────────────────────────────────

class ServiceListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        services = Service.objects.all()

        search = request.query_params.get('search')
        if search:
            services = services.filter(
                django_models.Q(name__icontains=search) |
                django_models.Q(description__icontains=search)
            )

        category = request.query_params.get('category')
        if category:
            services = services.filter(category__id=category)

        price = request.query_params.get('price')
        if price == 'free':
            services = services.filter(is_free=True)
        elif price == 'paid':
            services = services.filter(is_free=False)

        rating = request.query_params.get('rating')
        if rating:
            services = services.filter(rating__gte=rating)

        duration = request.query_params.get('duration')
        if duration:
            services = services.filter(duration=duration)

        serializer = ServiceSerializer(services, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# ─── PROVIDER ────────────────────────────────────────────────────────────────

class ProviderProfileView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, provider_id):
        try:
            profile = ProviderProfile.objects.get(id=provider_id)
            serializer = ProviderProfileSerializer(profile)
            services = Service.objects.filter(provider=profile)
            service_serializer = ServiceSerializer(services, many=True)
            return Response({
                "profile": serializer.data,
                "services": service_serializer.data,
            }, status=status.HTTP_200_OK)
        except ProviderProfile.DoesNotExist:
            return Response({"error": "Provider not found"}, status=status.HTTP_404_NOT_FOUND)


# ─── BOOKINGS ────────────────────────────────────────────────────────────────

class BookingListView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        bookings = Booking.objects.filter(client=request.user).order_by('-created_at')
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data.copy()
        data['client'] = request.user.id
        serializer = BookingSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookingDetailView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, booking_id):
        try:
            booking = Booking.objects.get(id=booking_id, client=request.user)
            serializer = BookingSerializer(booking)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Booking.DoesNotExist:
            return Response({"error": "Booking not found"}, status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, booking_id):
        try:
            booking = Booking.objects.get(id=booking_id)
            serializer = BookingSerializer(booking, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Booking.DoesNotExist:
            return Response({"error": "Booking not found"}, status=status.HTTP_404_NOT_FOUND)


# ─── REVIEWS ─────────────────────────────────────────────────────────────────

class ReviewView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data.copy()
        data['client'] = request.user.id
        serializer = ReviewSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProviderReviewsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, provider_id):
        reviews = Review.objects.filter(provider__id=provider_id).order_by('-created_at')
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# ─── CARDS ───────────────────────────────────────────────────────────────────

class CardView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        cards = Card.objects.filter(user=request.user)
        serializer = CardSerializer(cards, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ─── E-RECEIPT ───────────────────────────────────────────────────────────────

class EReceiptView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, booking_id):
        try:
            booking = Booking.objects.get(id=booking_id, client=request.user)
            return Response({
                "booking_id": booking.id,
                "client_name": booking.client.full_name,
                "client_email": booking.client.email,
                "service_name": booking.service.name if booking.service else "N/A",
                "category_name": booking.service.category.name if booking.service and booking.service.category else "N/A",
                "provider_name": booking.provider.business_name,
                "amount": booking.amount,
                "status": booking.status,
                "date": booking.created_at,
            }, status=status.HTTP_200_OK)
        except Booking.DoesNotExist:
            return Response({"error": "Booking not found"}, status=status.HTTP_404_NOT_FOUND)


# ─── JOBS (PROVIDER SIDE) ────────────────────────────────────────────────────

class JobListView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            provider_profile = ProviderProfile.objects.get(user=request.user)
        except ProviderProfile.DoesNotExist:
            return Response({"error": "Not a provider"}, status=status.HTTP_403_FORBIDDEN)

        status_filter = request.query_params.get('status')
        jobs = Booking.objects.filter(provider=provider_profile).order_by('-created_at')

        if status_filter == 'ongoing':
            jobs = jobs.filter(status__in=['waiting', 'scheduled'])
        elif status_filter:
            jobs = jobs.filter(status=status_filter)

        serializer = BookingSerializer(jobs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# ─── COMPLAINTS ──────────────────────────────────────────────────────────────

class ComplaintView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data.copy()
        data['client'] = request.user.id
        serializer = ComplaintSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        complaints = Complaint.objects.filter(client=request.user).order_by('-created_at')
        serializer = ComplaintSerializer(complaints, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# ─── USER PROFILE ────────────────────────────────────────────────────────────

class UserProfileView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile, _ = UserProfile.objects.get_or_create(user=request.user)
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request):
        profile, _ = UserProfile.objects.get_or_create(user=request.user)
        serializer = UserProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class BookingDetailView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, booking_id):
        try:
            # Allow both client and provider to fetch
            booking = Booking.objects.get(
                django_models.Q(id=booking_id) &
                (django_models.Q(client=request.user) | django_models.Q(provider__user=request.user))
            )
            serializer = BookingSerializer(booking)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Booking.DoesNotExist:
            return Response({"error": "Booking not found"}, status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, booking_id):
        try:
            booking = Booking.objects.get(id=booking_id)
            serializer = BookingSerializer(booking, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Booking.DoesNotExist:
            return Response({"error": "Booking not found"}, status=status.HTTP_404_NOT_FOUND)