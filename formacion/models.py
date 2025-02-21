from django.db import models
import datetime

# Create your models here.

class Formacion(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    imagen = models.ImageField(upload_to='formacion/images')
    date = models.DateField(datetime.date.today)
    url = models.URLField(blank=True)

    def __str__(self):
        return self.title