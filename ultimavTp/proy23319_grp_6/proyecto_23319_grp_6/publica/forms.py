from django import forms
from .models import Usuario, Clasificacion, Producto, CabCompras, DetCompras

class UsuarioForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ['email', 'telefono', 'provincia', 'calle', 'codigo_postal', 'fecha_alta', 'foto']
        labels = {'email': 'Email', 'telefono': 'Telefono', 'provincia': 'Provincia', 'calle': 'Calle', 'codigo_postal': 'Codigo Postal', 'fecha_alta': 'Fecha Alta', 'foto': 'Foto'}
        widgets = {'email': forms.TextInput(), 'telefono': forms.TextInput(), 'provincia': forms.TextInput(), 'calle': forms.TextInput(), 'codigo_postal': forms.TextInput(), 'fecha_alta': forms.TextInput(), 'foto': forms.TextInput()}

class ClasificacionForm(forms.ModelForm):
    class Meta:
        model = Clasificacion
        fields = ['desc_clasificacion', 'fecha_alta']
        labels = {'desc_clasificacion': 'Desc Clasificacion', 'fecha_alta': 'Fecha Alta'}
        widgets = {'desc_clasificacion': forms.TextInput(), 'fecha_alta': forms.TextInput()}

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['desc_producto', 'estado', 'fecha_alta', 'foto', 'clasificacion_id', 'persona_id', 'precio', 'stock']
        labels = {'desc_producto': 'Desc Producto', 'estado': 'Estado', 'fecha_alta': 'Fecha Alta', 'foto': 'Foto', 'clasificacion_id': 'Clasificacion Id', 'persona_id': 'Persona Id', 'precio': 'Precio', 'stock': 'Stock'}
        widgets = {'desc_producto': forms.TextInput(), 'estado': forms.TextInput(), 'fecha_alta': forms.TextInput(), 'foto': forms.TextInput(), 'clasificacion_id': forms.TextInput(), 'persona_id': forms.TextInput(), 'precio': forms.TextInput(), 'stock': forms.TextInput()}

class CabComprasForm(forms.ModelForm):
    class Meta:
        model = CabCompras
        fields = ['fecha_compra', 'comprador_id', 'total']
        labels = {'fecha_compra': 'Fecha Compra', 'comprador_id': 'Comprador Id', 'total': 'Total'}
        widgets = {'fecha_compra': forms.TextInput(), 'comprador_id': forms.TextInput(), 'total': forms.TextInput()}

class DetComprasForm(forms.ModelForm):
    class Meta:
        model = DetCompras
        fields = ['cab_compras_id', 'producto_id', 'cantidad', 'precio']
        labels = {'cab_compras_id': 'Cab Compras Id', 'producto_id': 'Producto Id', 'cantidad': 'Cantidad', 'precio': 'Precio'}
        widgets = {'cab_compras_id': forms.TextInput(), 'producto_id': forms.TextInput(), 'cantidad': forms.TextInput(), 'precio': forms.TextInput()}

        


