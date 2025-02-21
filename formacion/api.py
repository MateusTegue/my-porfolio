from .models import Formacion
from rest_framework import viewsets, permissions
from .serializers import FormacionSerializer

class FormacionViewSet(viewsets.ModelViewSet):
    queryset = Formacion.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = FormacionSerializer
