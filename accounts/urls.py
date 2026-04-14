from django.urls import path
from .views import (
    RegisterView,
    LoginView,
    ProfileView,
    VerifyOTPView,
    ForgotPasswordView,
    ResetPasswordView,
    CategoryListView,  # Added this
)

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),

    path('auth/forgot-password/', ForgotPasswordView.as_view(), name='forgot-password'),
    path('auth/reset-password/', ResetPasswordView.as_view(), name='reset-password'),

    path('profile/', ProfileView.as_view(), name='profile'),
    
    # Categories Endpoint
    path('categories/', CategoryListView.as_view(), name='category-list'),
]