from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.fun1, name="home")
]