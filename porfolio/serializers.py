

from rest_framework import serializers
from .models import Perfil, Project


# serializamos los datos que van a ser consultados desde el cliente 
class PerfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfil
        fields = ('id', 'imagen', 'nombre', 'perfilOcupaciona' , 'curriculum', 'descripcion')



class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'description', 'image', 'url')  # campos que se van a serializar


