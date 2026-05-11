from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet

router = DefaultRouter()
# Registering as an empty string '' makes it sit exactly at the include path
router.register(r'', ProjectViewSet, basename='project') 

urlpatterns = [
    path('', include(router.urls)),
]