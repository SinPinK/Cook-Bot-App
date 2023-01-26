from django.urls import path
from rest_framework import routers
from .views import (
    Test,
)

urlpatterns = [
    path('test/', Test.as_view())
]
