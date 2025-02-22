from rest_framework import serializers
from .models import Formacion

class FormacionSerializer(serializers.ModelSerializer):
    imagen = serializers.SerializerMethodField()  # Modificamos el campo imagen

    def get_imagen(self, obj):
        request = self.context.get('request')  # Obtenemos el request para construir la URL
        if obj.imagen:
            return request.build_absolute_uri(obj.imagen.url)  # Devuelve URL completa
        return None  # Si no hay imagen, retorna None

    class Meta:
        model = Formacion
        fields = ('id', 'title', 'description', 'imagen', 'date', 'url')
