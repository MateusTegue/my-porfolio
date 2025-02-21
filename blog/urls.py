from rest_framework import routers
from .api import BlogViewSet

router = routers.DefaultRouter()

router.register('blog', BlogViewSet, 'blog')

urlpatterns = router.urls