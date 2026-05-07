from django.contrib import admin
from .models import  CustomUser, Category, Service, ProviderProfile, Booking, Review,Card,Complaint

admin.site.register(Category)
admin.site.register(Service)
admin.site.register(ProviderProfile)
admin.site.register(Booking)
admin.site.register(Review)
admin.site.register(Complaint)
admin.site.register(Card)