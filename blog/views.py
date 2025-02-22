from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Post
from .serializers import BlogSerializers

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = BlogSerializers

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request  # Añade el request al contexto
        return context