from rest_framework import serializers
from .models import Post

# campos que vamos a serializar para que sean convertidos en formato json y js los pueda entender
class BlogSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'image', 'date')