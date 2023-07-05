from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from descub import views



router = routers.DefaultRouter()
router.register(r'usuario', views.UsuarioView, 'usuario')
router.register(r'muralista', views.MuralistaView, 'muralista')
router.register(r'mural', views.MuralView, 'mural')
router.register(r'color', views.ColorView, 'color')
router.register(r'paleta', views.PaletaView, 'paleta')
router.register(r'scan', views.ScanView, 'scan')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title= "descub API"))
] 