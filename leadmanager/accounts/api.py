from rest_framework import generics, permissions
from .serializers import RegisterSerializer,UserSerializer
from knox.models import AuthToken
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView
from django.contrib.auth import login


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def get(self, request):
        return Response({
            'user': UserSerializer(self.request.user, context=self.get_serializer_context()).data
        })

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        _, token = AuthToken.objects.create(user)

        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': token
        })

class LoginAPI(LoginView):
    permission_classes = {
        permissions.AllowAny
    }
    def get_user_serializer_class(self):
        return UserSerializer
    def post(self,request,format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI,self).post(request,format=None)

class UserAPI(generics.RetrieveAPIView):
    permission_classes = {
        permissions.IsAuthenticated
    }
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user