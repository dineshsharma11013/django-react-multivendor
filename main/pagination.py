from rest_framework import pagination
from rest_framework.response import Response

# https://www.youtube.com/watch?v=fI1Py3aBSCM&list=PLgnySyq8qZmo3d4uzPefYoGBN9Vpl266U&index=10

class CustomPagination(pagination.PageNumberPagination):
    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'data': data
        })


