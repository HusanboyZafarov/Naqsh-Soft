# Generated by Django 3.2.6 on 2023-01-12 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_contact_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='number',
            field=models.CharField(default='+998 ', max_length=17),
        ),
    ]
