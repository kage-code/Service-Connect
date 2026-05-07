from django.urls import path
from .views import (
    CardView,
    ProviderReviewsView,
    RegisterView,
    LoginView,
    ProfileView,
    VerifyOTPView,
    ForgotPasswordView,
    ResetPasswordView,
    CategoryListView,
    ServiceListView,ProviderProfileView,BookingListView,BookingDetailView,ReviewView,CardView,EReceiptView,JobListView,ComplaintView  # 👈 add this
)
from rest_framework_simplejwt.views import TokenRefreshView



urlpatterns = [
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),

    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),

    path('auth/forgot-password/', ForgotPasswordView.as_view(), name='forgot-password'),
    path('auth/reset-password/', ResetPasswordView.as_view(), name='reset-password'),

    path('profile/', ProfileView.as_view(), name='profile'),
    path('services/', ServiceListView.as_view(), name='service-list'),
    # Categories Endpoint
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('provider/<int:provider_id>/', ProviderProfileView.as_view(), name='provider-profile'),
    path('bookings/', BookingListView.as_view(), name='booking-list'),
    path('bookings/<int:booking_id>/', BookingDetailView.as_view(), name='booking-detail'),
    path('reviews/', ReviewView.as_view(), name='review'),
    path('reviews/provider/<int:provider_id>/', ProviderReviewsView.as_view(), name='provider-reviews'),
    path('cards/', CardView.as_view(), name='cards'),
    path('receipt/<int:booking_id>/', EReceiptView.as_view(), name='receipt'),
    path('jobs/', JobListView.as_view(), name='job-list'),
    path('complaints/', ComplaintView.as_view(), name='complaints'),
]