from rest_framework import serializers
from .models import *

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class MuralistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Muralista
        fields = '__all__'

class MuralSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mural
        fields = '__all__'


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'


class PaletaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paleta
        fields = '__all__'

class ScanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scan
        fields = '__all__'