from rest_framework import serializers
from .models import (
    CustomUser, Category, Service, ProviderProfile,
    Booking, Review, Card, Complaint, UserProfile
)


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['email', 'full_name', 'password', 'role']

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            full_name=validated_data['full_name'],
            password=validated_data['password'],
            role=validated_data.get('role', 'client')
        )
        return user


class CategorySerializer(serializers.ModelSerializer):
    subcategories = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'icon', 'route', 'subcategories']

    def get_subcategories(self, obj):
        return CategorySerializer(obj.subcategories.all(), many=True).data


class ServiceSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    provider_name = serializers.CharField(source='provider.user.full_name', read_only=True)
    provider_business = serializers.CharField(source='provider.business_name', read_only=True)
    provider_location = serializers.CharField(source='provider.location', read_only=True)
    provider_image = serializers.ImageField(source='provider.profile_image', read_only=True)

    class Meta:
        model = Service
        fields = [
            'id', 'name', 'description', 'min_price', 'max_price', 'is_free',
            'rating', 'duration', 'image', 'category', 'category_name',
            'provider', 'provider_name', 'provider_business',
            'provider_location', 'provider_image', 'created_at'
        ]


class ProviderProfileSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(source='user.full_name', read_only=True)
    email = serializers.CharField(source='user.email', read_only=True)

    class Meta:
        model = ProviderProfile
        fields = ['id', 'full_name', 'email', 'business_name', 'location', 'profile_image', 'bio', 'is_verified']


class BookingSerializer(serializers.ModelSerializer):
    provider_name = serializers.CharField(source='provider.business_name', read_only=True)
    client_name = serializers.CharField(source='client.full_name', read_only=True)
    service_name = serializers.CharField(source='service.name', read_only=True)

    class Meta:
        model = Booking
        fields = [
            'id', 'title', 'description', 'status', 'amount', 'note',
            'from_date', 'to_date', 'provider', 'provider_name',
            'client', 'client_name', 'service', 'service_name', 'created_at'
        ]


class ReviewSerializer(serializers.ModelSerializer):
    client_name = serializers.CharField(source='client.full_name', read_only=True)
    client_image = serializers.ImageField(source='client.profile.profile_image', read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'booking', 'client', 'client_name', 'client_image', 'provider', 'rating', 'comment', 'image', 'created_at']


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'card_name', 'card_number', 'expiry_date', 'created_at']


class ComplaintSerializer(serializers.ModelSerializer):
    client_name = serializers.CharField(source='client.full_name', read_only=True)
    booking_amount = serializers.DecimalField(source='booking.amount', max_digits=10, decimal_places=2, read_only=True)
    booking_from_date = serializers.DateTimeField(source='booking.from_date', read_only=True)
    booking_to_date = serializers.DateTimeField(source='booking.to_date', read_only=True)
    provider_name = serializers.CharField(source='booking.provider.business_name', read_only=True)

    class Meta:
        model = Complaint
        fields = [
            'id', 'booking', 'client', 'client_name', 'title', 'description',
            'image', 'status', 'booking_amount', 'booking_from_date',
            'booking_to_date', 'provider_name', 'created_at'
        ]


class UserProfileSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(source='user.full_name', read_only=True)
    email = serializers.CharField(source='user.email', read_only=True)

    class Meta:
        model = UserProfile
        fields = [
            'id', 'full_name', 'email', 'bio', 'profile_image',
            'phone', 'dob', 'gender', 'house_name', 'landmark',
            'pincode', 'district', 'state'
        ]