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

        user.set_password(password)
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

    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='client'
    )

    otp = models.CharField(max_length=6, blank=True, null=True)
    is_verified = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True, null=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    def __str__(self):
        return self.email


class UserProfile(models.Model):

    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)

    # basic info
    full_name = models.CharField(max_length=255)
    address = models.TextField(blank=True, null=True)
    dob = models.DateField(blank=True, null=True)

    phone = models.CharField(max_length=15, blank=True, null=True)

    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    )

    gender = models.CharField(
        max_length=10,
        choices=GENDER_CHOICES,
        blank=True,
        null=True
    )

    # address info
    house_name = models.CharField(max_length=255, blank=True, null=True)
    landmark = models.CharField(max_length=255, blank=True, null=True)

    pincode = models.CharField(max_length=10, blank=True, null=True)
    district = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)

    # profile image
    profile_image = models.ImageField(
        upload_to="profiles/",
        null=True,
        blank=True
    )

    # address proof
    ADDRESS_PROOF_CHOICES = (
        ('aadhaar', 'Aadhaar'),
        ('passport', 'Passport'),
        ('driving_license', 'Driving License'),
        ('voter_id', 'Voter ID'),
    )

    address_proof_type = models.CharField(
        max_length=50,
        choices=ADDRESS_PROOF_CHOICES,
        blank=True,
        null=True
    )

    id_number = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    address_proof_document = models.FileField(
        upload_to="documents/",
        blank=True,
        null=True
    )

    # payout settings
    PAYOUT_CHOICES = (
        ('daily', 'Daily'),
        ('weekly', 'Weekly'),
        ('monthly', 'Monthly'),
    )

    payout_required = models.CharField(
        max_length=20,
        choices=PAYOUT_CHOICES,
        blank=True,
        null=True
    )

    terms_accepted = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.email