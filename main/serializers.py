from rest_framework import serializers
from . import models


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = '__all__'
        depth = 1
        #fields = ['id','user','address']

    # def __init__(self, *args, **kwargs):
    #     super(VendorSerializer, self).__init__(*args, *kwargs)
    #     self.Meta.depth = 1

class VendorDetailSerializer(serializers.ModelSerializer):
    #User = VendorSerializer()

    class Meta:
        model = models.Vendor
        fields = ['id','user','address']
        depth = 1
    
    # def __init__(self, *args, **kwargs):
    #     super(VendorDetailSerializer, self).__init__(*args, *kwargs)
    #     self.Meta.depth = 1


class ProductListSerializer(serializers.ModelSerializer):
    #vendor = VendorSerializer()
    class Meta:
        model = models.Product 
        fields = '__all__'
        depth = 1

    # def __init__(self, *args, **kwargs):
    #     super(ProductListSerializer, self).__init__(*args, *kwargs)
    #     self.Meta.depth = 1


class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product 
        fields = '__all__'
        depth = 1
