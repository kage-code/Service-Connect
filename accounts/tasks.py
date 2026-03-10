from celery import shared_task
import random
from django.core.mail import send_mail
from django.core.cache import cache

@shared_task
def send_otp_email(email):

    otp = str(random.randint(100000,999999))

    # store OTP in Redis for 5 minutes
    cache.set(email, otp, timeout=300)

    send_mail(
        "Your OTP Code",
        f"Your OTP is {otp}",
        "noreply@example.com",
        [email],
        fail_silently=False,
    )

    return otp