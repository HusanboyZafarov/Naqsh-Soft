from django.db import models
# from django_quill.fields import QuillField
from ckeditor.fields import RichTextField
# Create your models here.


class BelievedCustomers(models.Model):
    title = models.CharField(max_length=250)
    image = models.ImageField(upload_to="Customers/%Y-Year/%m-Month/")

    class Meta:
        verbose_name_plural = "Bizga ishonch bildirganlar"
        verbose_name = "Bizga ishonch bildirgan"

    def __str__(self):
        return f"{self.title}"


class OurWorks(models.Model):
    CHOICES = (
        ("web", 'web'),
        ("mobile", 'mobile'),
        ("desktop", 'desktop'),)
    title = models.CharField(max_length=300)
    author = models.CharField(max_length=255)
    image = models.ImageField(upload_to="OurWorks/%Y-Year/%m-Month")
    url = models.URLField(max_length=300)
    category = models.CharField(choices=CHOICES, max_length=200)
    description = RichTextField()

    class Meta:
        verbose_name_plural = "Bizning loyihalarimiz"

    def __str__(self):
        return f"{self.author}-{self.title}"


class Contact(models.Model):
    CHOICES = (
        ("Ish Yuzasidan", 'Ish Yuzasidan'),
        ("Kamchiliklar Yuzasidan", 'Kamchiliklar Yuzasidan'),
        ("Takliflar Yuzasidan", 'Takliflar Yuzasidan'),
        ("Boshqa Masalada", 'Boshqa Masalada'),
    )
    fullname = models.CharField(max_length=255)
    number = models.CharField(max_length=17, default="+998 ")
    contact_type = models.CharField(
        max_length=555, default='Ish Yuzasidan', choices=CHOICES,)
    message = models.TextField(default="Assalomu Alaikum, ")

    class Meta:
        verbose_name_plural = "Habarlar"
        verbose_name = "Habar"

    def __str__(self):
        return f"{self.fullname}ning - Murojati"
