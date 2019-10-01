from django.shortcuts import render
from .serializers import PhotoSerializer
from rest_framework import viewsets 
from .models import Photo


class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all().order_by('-updated_at')
    serializer_class = PhotoSerializer

