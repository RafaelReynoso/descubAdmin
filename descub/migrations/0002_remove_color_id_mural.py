# Generated by Django 4.2.2 on 2023-07-10 21:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('descub', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='color',
            name='id_mural',
        ),
    ]
