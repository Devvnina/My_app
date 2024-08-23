from django import forms
from .models import User, Product, ProductCategory

class UserRegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['name', 'email', 'password']

class ProductForm(forms.ModelForm):
    category = forms.ModelChoiceField(queryset=ProductCategory.objects.all())

    class Meta:
        model = Product
        fields = ['name', 'description', 'price', 'image', 'category']

