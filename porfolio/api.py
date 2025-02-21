from .models import Perfil , Project
from rest_framework import viewsets, permissions
from .serializers import PerfilSerializer, ProjectSerializer

class PerfilViewSet(viewsets.ModelViewSet):
    queryset = Perfil.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PerfilSerializer



class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProjectSerializer


