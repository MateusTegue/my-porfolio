from rest_framework import routers
from .api import FormacionViewSet

router = routers.DefaultRouter()

router.register('formacion', FormacionViewSet , 'formacion')

urlpatterns = router.urls