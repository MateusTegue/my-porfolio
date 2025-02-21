from django.db import models
import datetime

# Create your models here.


# creacion del modelo para los blog 
class Post(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='blog/images')
    date = models.DateField(datetime.date.today)

    def __str__(self):
        return self.title