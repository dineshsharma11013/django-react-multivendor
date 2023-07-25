
from django.contrib import admin
from django.urls import path,include

# when we add this then this will show logout option in rest framework url (rest_framework.urls)
# https://www.youtube.com/watch?v=WbOvzuxvb60&list=PLgnySyq8qZmo3d4uzPefYoGBN9Vpl266U&index=2 --- for authentication

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('main.urls')),
    path('api-auth/', include('rest_framework.urls'))  
]
