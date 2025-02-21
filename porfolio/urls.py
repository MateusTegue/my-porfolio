from rest_framework import routers
from .api import PerfilViewSet, ProjectViewSet
router = routers.DefaultRouter()

router.register('api/home', PerfilViewSet, 'home')
router.register('api/project', ProjectViewSet, 'project')


urlpatterns = router.urls