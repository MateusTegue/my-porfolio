from rest_framework import serializers
from .models import Formacion

class FormacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Formacion
        fields = ('id', 'title', 'description', 'imagen', 'date', 'url')