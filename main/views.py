from rest_framework import generics, permissions
from . import serializers
from . import models

class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    #permission_classes = [permissions.IsAuthenticated]  # this is for single view permission, for project level permission we configured setting file

class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer
    #permission_classes = [permissions.IsAuthenticated]


