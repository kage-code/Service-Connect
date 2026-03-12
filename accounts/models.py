from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone


class CustomUserManager(BaseUserManager):
    def create_user(self, email, full_name, password=None, role='client'):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)

        user = self.model(
            email=email,
            full_name=full_name,
            role=role,
        )

        user.set_password(password)  # hashes password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, full_name, password):
        user = self.create_user(
            email=email,
            full_name=full_name,
            password=password,
            role='admin'
        )
        user.is_staff = True
        user.is_superuser = True
        user.is_active = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):

    ROLE_CHOICES = (
        ('client', 'Client'),
        ('provider', 'Provider'),
        ('admin', 'Admin'),
    )
    otp = models.CharField(max_length=6, blank=True, null=True)
    is_verified = models.BooleanField(default=False)

    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='client')

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    created_at = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    def __str__(self):
        return self.email

class UserProfile(models.Model):

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)

    address = models.TextField(blank=True)
    dob = models.DateField(null=True, blank=True)

    phone = models.CharField(max_length=15, blank=True)
    gender = models.CharField(max_length=10, blank=True)

    house_name = models.CharField(max_length=255, blank=True)
    landmark = models.CharField(max_length=255, blank=True)

    pincode = models.CharField(max_length=10, blank=True)
    district = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=100, blank=True)

    profile_image = models.ImageField(upload_to="profiles/", null=True, blank=True)

    def __str__(self):
        return self.user.email