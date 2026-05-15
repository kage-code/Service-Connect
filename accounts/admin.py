from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser, UserProfile, ProviderProfile, Category, Service, Booking, Review, Card, Complaint


# --- Inlines ---

class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    verbose_name_plural = 'User Profile'
    fk_name = 'user'


class ProviderProfileInline(admin.StackedInline):
    model = ProviderProfile
    can_delete = False
    verbose_name_plural = 'Provider Profile'
    fk_name = 'user'


# --- CustomUser Admin ---

@admin.register(CustomUser)
class CustomUserAdmin(BaseUserAdmin):
    list_display = ['email', 'full_name', 'role', 'is_active', 'is_verified']
    list_filter = ['role', 'is_active', 'is_verified']
    search_fields = ['email', 'full_name']
    ordering = ['email']

    fieldsets = (
        (None, {'fields': ('email', 'full_name', 'password', 'role')}),
        ('Status', {'fields': ('is_active', 'is_staff', 'is_superuser', 'is_verified')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'full_name', 'password1', 'password2', 'role'),
        }),
    )

    def get_inlines(self, request, obj=None):
        if obj is None:
            return []  # no inlines when creating a new user
        if obj.role == 'provider':
            return [UserProfileInline, ProviderProfileInline]
        return [UserProfileInline]


# --- UserProfile Admin (no Add button — managed via CustomUser inline) ---

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'phone', 'district', 'state']
    search_fields = ['user__email', 'user__full_name']

    def has_add_permission(self, request):
        return False  # prevents manual creation → avoids duplicate error


# --- ProviderProfile Admin ---

@admin.register(ProviderProfile)
class ProviderProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'business_name', 'location', 'is_verified']
    search_fields = ['user__email', 'business_name']

    def has_add_permission(self, request):
        return False  # same — created automatically via signal


# --- Other Models ---

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'parent']
    search_fields = ['name']


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'provider', 'category', 'min_price', 'max_price', 'rating']
    search_fields = ['name', 'provider__user__full_name']
    list_filter = ['category', 'duration']


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['title', 'client', 'provider', 'status', 'amount', 'created_at']
    list_filter = ['status']
    search_fields = ['title', 'client__email', 'provider__user__full_name']


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['client', 'provider', 'rating', 'created_at']
    search_fields = ['client__email']


@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
    list_display = ['user', 'card_name', 'card_number', 'expiry_date']
    search_fields = ['user__email', 'card_name']


@admin.register(Complaint)
class ComplaintAdmin(admin.ModelAdmin):
    list_display = ['title', 'client', 'status', 'created_at']
    list_filter = ['status']
    search_fields = ['title', 'client__email']