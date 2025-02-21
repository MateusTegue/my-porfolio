from .models import Post
from rest_framework import viewsets, permissions
from .serializers import BlogSerializers


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = BlogSerializers
