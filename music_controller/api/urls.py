
from django.urls import path
from .views import RoomView
from .views import createRoomView
from .views import GetRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', createRoomView.as_view()),
    path('get-room',GetRoom.as_view())
] 
