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
    product_ratings = serializers.StringRelatedField(many=True, read_only=True)
    #vendor = VendorSerializer()
    class Meta:
        model = models.Product 
        fields = ['id', 'category', 'vendor', 'title', 'detail', 'price', 'product_ratings'] #'__all__'
        #depth = 1

    # def __init__(self, *args, **kwargs):
    #     super(ProductListSerializer, self).__init__(*args, *kwargs)
    #     self.Meta.depth = 1


class ProductDetailSerializer(serializers.ModelSerializer):
    product_ratings = serializers.StringRelatedField(many=True, read_only=True) #PrimaryKeyRelatedField
    #https://www.youtube.com/watch?v=F4-l6hz0bKo&list=PLgnySyq8qZmo3d4uzPefYoGBN9Vpl266U&index=12 for PrimaryKeyRelatedField
    # product_ratings -- this is same as related_name in ProductRating model now we are joining this table also

    class Meta:
        model = models.Product 
        fields = ['id', 'category', 'vendor', 'title', 'detail', 'price', 'product_ratings'] #'__all__'
        #depth = 1


# customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = '__all__'
        depth = 1
        #fields = ['id','user','address']

    # def __init__(self, *args, **kwargs):
    #     super(VendorSerializer, self).__init__(*args, *kwargs)
    #     self.Meta.depth = 1

class CustomerDetailSerializer(serializers.ModelSerializer):
    #User = VendorSerializer()

    class Meta:
        model = models.Customer
        fields = '__all__' #['id','user','address']
        depth = 1



class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ['id', 'customer']
        depth = 1
        #fields = ['id','user','address']

    # def __init__(self, *args, **kwargs):
    #     super(OrderSerializer, self).__init__(*args, *kwargs)
    #     self.Meta.depth = 1

class OrderDetailSerializer(serializers.ModelSerializer):
    #User = VendorSerializer()

    class Meta:
        model = models.OrderItems
        fields = ['id', 'order', 'product'] #'__all__' #['id','user','address']
        depth = 1


class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerAddress
        fields = ['id', 'customer', 'address', 'default_address']
        depth = 1

    # def __init__(self, *args, **kwargs):
    #     super(CustomerAddressSerializer, self).__init__(*args, *kwargs)
    #     self.Meta.depth = 1


class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields = ['id', 'customer', 'product', 'rating', 'reviews', 'add_time']
        depth = 1

        # def __init__(self, *args, **kwargs):
    #     super(ProductRatingSerializer, self).__init__(*args, *kwargs)
    #     self.Meta.depth = 1



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        #fields = '__all__'
        depth = 1
        fields = ['id','title', 'detail']

    # def __init__(self, *args, **kwargs):
    #     super(CategorySerializer, self).__init__(*args, *kwargs)
    #     self.Meta.depth = 1

class CategoryDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.ProductCategory
        fields = ['id','title', 'detail']
        depth = 1
    
    # def __init__(self, *args, **kwargs):
    #     super(CategoryDetailSerializer, self).__init__(*args, *kwargs)
    #     self.Meta.depth = 1








