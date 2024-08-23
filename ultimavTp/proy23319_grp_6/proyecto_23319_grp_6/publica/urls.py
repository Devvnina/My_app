from django.urls import path
from . import views


urlpatterns = [
  #path de urls de las vistas
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('formLogin/', views.formLogin, name='formLogin'),
    path('usuarios_create/', views.usuarios_create, name='usuarios_create'),
    path('usuarios_listar/', views.usuarios_listar, name='usuarios_listar'),
    path('clasificacion_create/', views.clasificacion_create, name='clasificacion_create'),
    path('clasificacion_listar/', views.clasificacion_listar, name='clasificacion_listar'),
    path('clasificacion_listar/<int:id>/', views.clasificacion_listar, name='clasificacion_listar'),
    path('producto_create/', views.producto_create, name='producto_create'),
    path('producto_listar/', views.producto_listar, name='producto_listar'),
    path('producto_listar/<int:id>/', views.producto_listar, name='producto_listar'),
    path('cabcompras_create/', views.cabcompras_create, name='cabcompras_create'),
    path('cabcompras_listar/', views.cabcompras_listar, name='cabcompras_listar'),
    path('cabcompras_listar/<int:id>/', views.cabcompras_listar, name='cabcompras_listar'),
    
]