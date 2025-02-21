from django.db import models

# Create your models here.

class Perfil(models.Model):
    imagen = models.ImageField(upload_to='porfolio/imagesPerfil/' , blank=True , null=True)
    nombre = models.CharField(max_length=50)
    perfilOcupaciona = models.CharField(max_length=100)
    curriculum = models.FileField(upload_to='porfolio/curriculums/', blank=True, null=True)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='porfolio/images/')
    url = models.URLField(blank=True)

    def __str__(self):
        return self.title