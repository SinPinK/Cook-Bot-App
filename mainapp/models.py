from django.db import models

# Create your models here.

class User(models.Model):
    user_name = models.CharField("User name", max_length=255)
    email = models.EmailField()
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    def __str__(self):
        return self.user_name