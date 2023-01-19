from rest_framework import serializers
from .models import User

...
class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('pk','first_name', 'email')