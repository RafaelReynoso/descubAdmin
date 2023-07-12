from django.db import models

import base64
from io import BytesIO
from PIL import Image

# Create your models here.

class Usuario(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=200)
    email = models.CharField(max_length=250)
    fecha_registro = models.DateField()

    def __str__(self):
        return f"Usuario #{self.nombre}"


class Muralista(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=200)
    seudonimo = models.CharField(max_length=100)
    foto = models.CharField(null=True, max_length=200)
    celular = models.CharField(max_length=9)
    user_instagram = models.CharField(max_length=30)
    user_facebook = models.CharField(max_length=50)
    email = models.CharField(max_length=250)

    def __str__(self):
        return f"Muralista #{self.nombre}"
    


class Mural(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200)
    direccion = models.CharField(max_length=200)
    fecha_creacion = models.DateField()
    imagen1 = models.CharField(null=True, max_length=200)
    imagen2 = models.CharField(null=True, max_length=200)
    imagen3 = models.CharField(null=True, max_length=200)
    descripcion = models.CharField(max_length=200)
    id_muralista = models.ForeignKey('Muralista', on_delete=models.CASCADE)
    latitud = models.DecimalField(max_digits=10, decimal_places=8)
    altitud = models.DecimalField(max_digits=10, decimal_places=8)

    def __str__(self):
        return f"Mural #{self.nombre}"
    
    

class Color(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200)
    codigo = models.CharField(max_length=7)
    red = models.CharField(max_length=3)
    blue = models.CharField(max_length=3)
    green = models.CharField(max_length=3)

    def __str__(self):
        return f"Color #{self.codigo}"

class Paleta(models.Model):
    id = models.AutoField(primary_key=True)
    id_mural = models.ForeignKey(Mural, on_delete=models.CASCADE)
    id_color = models.ForeignKey(Color, on_delete=models.CASCADE)

    def __str__(self):
        return f"Paleta #{self.id}"

class Scan(models.Model):
    id = models.AutoField(primary_key=True)
    id_mural = models.ForeignKey(Mural, on_delete=models.CASCADE)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha_registro = models.DateField()

    def __str__(self):
        return f"Scan #{self.id}"