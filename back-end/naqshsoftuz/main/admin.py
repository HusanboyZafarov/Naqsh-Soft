from django.contrib import admin
from .models import BelievedCustomers, Contact, OurWorks
# Register your models here.


@admin.register(BelievedCustomers)
class BelievedCustomersAdmin(admin.ModelAdmin):
    search_fields = ["title"]
    list_display = ["title"]
    list_display_links = ["title"]


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    search_fields = ["fullname", "contact_type"]
    list_display = ["fullname", "contact_type", "number"]
    list_display_links = ["fullname", "contact_type", "number"]
    list_filter = ["contact_type"]


@admin.register(OurWorks)
class OurWorksAdmin(admin.ModelAdmin):
    search_fields = ["author", "title", "category"]
    list_display = ["author", "title", "category"]
    list_display_links = ["author", "title", "category"]
    list_filter = ["category"]
