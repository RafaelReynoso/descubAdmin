# Generated by Django 4.2.2 on 2023-07-11 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('descub', '0002_remove_color_id_mural'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mural',
            name='imagen1',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='mural',
            name='imagen2',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='mural',
            name='imagen3',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='muralista',
            name='foto',
            field=models.CharField(max_length=200, null=True),
        ),
    ]