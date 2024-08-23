# crear, editar, eliminar, listar, buscar usuarios, productos, clasificacion, comentarios, estados.
from django.shortcuts import render, redirect
from .forms import UsuarioForm, ClasificacionForm, ProductoForm, CabComprasForm,DetComprasForm

from .models import Usuario, Clasificacion, Producto, CabCompras, DetCompras
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.db.models import Q
from django.core.paginator import Paginator
from django.contrib.auth.forms import UserCreationForm
from django.http import Http404

# Create your views here. create_user, authenticate, login, logout, redirect, HttpResponse, render, messages, UserCreationForm, User, Q, CabCompras, Producto, Clasificacion, Usuario, CabComprasForm, ProductoForm, ClasificacionForm, UsuarioForm
## Redirect to a success page

def index(request):
    return render(request, 'index.html')

#def loginPage(request):
def login(request):
    return render(request, 'login.html')

def formLogin(request):
    return render(request, 'formLogin.html')


def usuarios_create(request):
    if request.method == 'POST':
        form = UsuarioForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('usuarios_listar')
    else:
        form = UsuarioForm()
    return render(request, 'usuarios_form.html', {'form': form})

def usuarios_edit(request, id):
    usuario = Usuario.objects.get(user_id=id)
    if request.method == 'GET':
        form = UsuarioForm(instance=usuario)
    else:
        form = UsuarioForm(request.POST, instance=usuario)
        if form.is_valid():
            form.save()
        return redirect('usuarios_listar')
    return render(request, 'usuarios_form.html', {'form': form})

def usuarios_delete(request, id):
    usuario = Usuario.objects.get(user_id=id)
    if request.method == 'POST':
        usuario.delete()
        return redirect('usuarios_listar')
    return render(request, 'usuarios_delete.html', {'usuario': usuario})

def usuarios_listar(request):
    usuarios = Usuario.objects.all()
    page = request.GET.get('page', 1)
    try:
        paginator = Paginator(usuarios, 5)
        usuarios = paginator.page(page)
    except:
        raise Http404
    return render(request, 'usuarios_listar.html', {'usuarios': usuarios})

def clasificacion_create(request):
    if request.method == 'POST':
        form = ClasificacionForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('clasificacion_listar')
    else:
        form = ClasificacionForm()
    return render(request, 'clasificacion_form.html', {'form': form})

def clasificacion_edit(request, id):
    clasificacion = Clasificacion.objects.get(id=id)
    if request.method == 'GET':
        form = ClasificacionForm(instance=clasificacion)
    else:
        form = ClasificacionForm(request.POST, instance=clasificacion)
        if form.is_valid():
            form.save()
        return redirect('clasificacion_listar')
    return render(request, 'clasificacion_form.html', {'form': form})

def clasificacion_delete(request, id):
    clasificacion = Clasificacion.objects.get(id=id)
    if request.method == 'POST':
        clasificacion.delete()
        return redirect('clasificacion_listar')
    return render(request, 'clasificacion_delete.html', {'clasificacion': clasificacion})

def clasificacion_listar(request):
    clasificaciones = Clasificacion.objects.all()
    page = request.GET.get('page', 1)
    try:
        paginator = Paginator(clasificaciones, 5)
        clasificaciones = paginator.page(page)
    except:
        raise Http404
    return render(request, 'clasificacion_listar.html', {'clasificaciones': clasificaciones})

def producto_create(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('producto_listar')
    else:
        form = ProductoForm()
    return render(request, 'producto_form.html', {'form': form})

def producto_edit(request, id):
    producto = Producto.objects.get(id=id)
    if request.method == 'GET':
        form = ProductoForm(instance=producto)
    else:
        form = ProductoForm(request.POST, instance=producto)
        if form.is_valid():
            form.save()
        return redirect('producto_listar')
    return render(request, 'producto_form.html', {'form': form})

def producto_delete(request, id):
    producto = Producto.objects.get(id=id)
    if request.method == 'POST':
        producto.delete()
        return redirect('producto_listar')
    return render(request, 'producto_delete.html', {'producto': producto})

def producto_listar(request):
    productos = Producto.objects.all()
    page = request.GET.get('page', 1)
    try:
        paginator = Paginator(productos, 5)
        productos = paginator.page(page)
    except:
        raise Http404
    return render(request, 'producto_listar.html', {'productos': productos})

def cabcompras_create(request):
    if request.method == 'POST':
        form = CabComprasForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('cabcompras_listar')
    else:
        form = CabComprasForm()
    return render(request, 'cabcompras_form.html', {'form': form})

def cabcompras_edit(request, id):
    cabcompras = CabCompras.objects.get(id=id)
    if request.method == 'GET':
        form = CabComprasForm(instance=cabcompras)
    else:
        form = CabComprasForm(request.POST, instance=cabcompras)
        if form.is_valid():
            form.save()
        return redirect('cabcompras_listar')
    return render(request, 'cabcompras_form.html', {'form': form})

def cabcompras_delete(request, id):
    cabcompras = CabCompras.objects.get(id=id)
    if request.method == 'POST':
        cabcompras.delete()
        return redirect('cabcompras_listar')
    return render(request, 'cabcompras_delete.html', {'cabcompras': cabcompras})

def cabcompras_listar(request):
    cabcompras = CabCompras.objects.all()
    page = request.GET.get('page', 1)
    try:
        paginator = Paginator(cabcompras, 5)
        cabcompras = paginator.page(page)
    except:
        raise Http404
    return render(request, 'cabcompras_listar.html', {'cabcompras': cabcompras})

def detcompras_create(request):
    if request.method == 'POST':
        form = DetComprasForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('detcompras_listar')
    else:
        form = DetComprasForm()
    return render(request, 'detcompras_form.html', {'form': form})

def detcompras_edit(request, id):
    detcompras = DetCompras.objects.get(id=id)
    if request.method == 'GET':
        form = DetComprasForm(instance=detcompras)
    else:
        form = DetComprasForm(request.POST, instance=detcompras)
        if form.is_valid():
            form.save()
        return redirect('detcompras_listar')
    return render(request, 'detcompras_form.html', {'form': form})

def detcompras_delete(request, id):
    detcompras = DetCompras.objects.get(id=id)
    if request.method == 'POST':
        detcompras.delete()
        return redirect('detcompras_listar')
    return render(request, 'detcompras_delete.html', {'detcompras': detcompras})

def detcompras_listar(request):
    detcompras = DetCompras.objects.all()
    page = request.GET.get('page', 1)
    try:
        paginator = Paginator(detcompras, 5)
        detcompras = paginator.page(page)
    except:
        raise Http404
    return render(request, 'detcompras_listar.html', {'detcompras': detcompras})



