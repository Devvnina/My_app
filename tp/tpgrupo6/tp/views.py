from django.shortcuts import render, redirect, get_object_or_404
from .forms import UserRegistrationForm, ProductForm
from .models import User, Product
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login


# Create your views here.

def register_user(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(request, username=username, password=password)
            login(request, user)
            return redirect('home.html')  # Redirect to a success page or another view
    else:
        form = UserCreationForm()

    return render(request, 'register.html', {'form': form})

def user_list(request):
    user_list = User.objects.all()
    return render(request, 'user_list.html', {'users': user_list})

def product(request):
    products = Product.objects.all()
    return render(request, 'product.html', {'products': products})

def add_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('product')  # Redirect to a success page or another view
    else:
        form = ProductForm()

    return render(request, 'add_product.html', {'form': form})

def update_product(request, pk):
    product = get_object_or_404(Product, pk=pk)
    if request.method == 'POST':
        form = ProductForm(request.POST, instance=product)
        if form.is_valid():
            form.save()
            return redirect('product')  # Redirect to the product list or another view
    else:
        form = ProductForm(instance=product)

    return render(request, 'update_product.html', {'form': form})

def delete_product(request, pk):
    product = get_object_or_404(Product, pk=pk)
    product.delete()
    return redirect('product')  # Redirect to the product list or another view
