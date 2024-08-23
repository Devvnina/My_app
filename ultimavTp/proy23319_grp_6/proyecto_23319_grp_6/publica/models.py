#crear modelo para usuarios, productos, clasificacion, comentarios, estados.
#modelo de usuarios (tabla administracion_persona) con user_id, email, telefono, provincia, calle, codigo_postal, fecha_alta, foto
from django.db import models

class Usuario(models.Model):
    user_id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    provincia = models.CharField(max_length=100)
    calle = models.CharField(max_length=100)
    codigo_postal = models.CharField(max_length=100)
    fecha_alta = models.DateField()
    foto = models.CharField(max_length=100)

    def __str__(self):
        return self.email
    
    class Meta:
        db_table = 'administracion_persona'

#crear modelo clasificacion campos:  id, desc_clasificacion, fecha_alta
class Clasificacion(models.Model):
    id = models.AutoField(primary_key=True)
    desc_clasificacion = models.CharField(max_length=100)
    fecha_alta = models.DateField()

    def __str__(self):
        return self.desc_clasificacion
    
    class Meta:
        db_table = 'clasificacion'

 # crear modelo producto, campos: id, desc_producto, estado, fecha_alta, foto, clasificacion_id, persona_id, precio, stock
class Producto(models.Model):
    id = models.AutoField(primary_key=True)
    desc_producto = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)
    fecha_alta = models.DateField()
    foto = models.CharField(max_length=100)
    clasificacion_id = models.ForeignKey(Clasificacion, on_delete=models.CASCADE)
    persona_id = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    precio = models.FloatField()
    stock = models.IntegerField()

    def __str__(self):
        return self.desc_producto
    
    class Meta:
        db_table = 'producto'
    
# crear modelo  compras tabla  cab_compras  campos: id, fecha_compra, comprador_id, total
class CabCompras(models.Model):
    id = models.AutoField(primary_key=True)
    fecha_compra = models.DateField()
    comprador_id = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    total = models.FloatField()

    def __str__(self):
        return self.fecha_compra
    
    class Meta:
        db_table = 'cab_compras'
# crear modelo tabla  det_compras, campos: id, id_compra, precio, cantidad, producto_id
class DetCompras(models.Model):
    id = models.AutoField(primary_key=True)
    id_compra = models.ForeignKey(CabCompras, on_delete=models.CASCADE)
    precio = models.FloatField()
    cantidad = models.IntegerField()
    producto_id = models.ForeignKey(Producto, on_delete=models.CASCADE)

    def __str__(self):
        return self.id_compra
    
    class Meta:
        db_table = 'det_compras'
        


       

