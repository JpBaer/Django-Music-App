
from django.urls import path
from .views import RoomView
from .views import createRoomView

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', createRoomView.as_view())
] 
