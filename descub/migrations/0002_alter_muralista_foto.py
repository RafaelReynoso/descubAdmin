# Generated by Django 4.2.2 on 2023-07-03 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('descub', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='muralista',
            name='foto',
            field=models.ImageField(null=True, upload_to='fotos_muralistas/'),
        ),
    ]