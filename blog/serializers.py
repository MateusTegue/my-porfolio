from rest_framework import serializers
from .models import Post

# campos que vamos a serializar para que sean convertidos en formato json y js los pueda entender
class BlogSerializers(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()  # Campo personalizado para la imagen

    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'image', 'date')

    def get_image(self, obj):
        if obj.image:  # Verifica si el campo de imagen no está vacío
            return self.context['request'].build_absolute_uri(obj.image.url)
        return None