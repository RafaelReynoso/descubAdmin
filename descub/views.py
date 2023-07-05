from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class MuralistaView(viewsets.ModelViewSet):
    serializer_class = MuralistaSerializer
    queryset = Muralista.objects.all()


class MuralView(viewsets.ModelViewSet):
    serializer_class = MuralSerializer
    queryset = Mural.objects.all()


class ColorView(viewsets.ModelViewSet):
    serializer_class = ColorSerializer
    queryset = Color.objects.all()


class PaletaView(viewsets.ModelViewSet):
    serializer_class = PaletaSerializer
    queryset = Paleta.objects.all()


class ScanView(viewsets.ModelViewSet):
    serializer_class = ScanSerializer
    queryset = Scan.objects.all()




