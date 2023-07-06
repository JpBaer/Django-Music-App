
from django.urls import path
from .views import RoomView
from .views import createRoomView
from .views import GetRoom
from .views import JoinRoom
from .views import UserInRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', createRoomView.as_view()),
    path('get-room',GetRoom.as_view()),
    path('join-room', JoinRoom.as_view()),
    path('user-in-room', UserInRoom.as_view())
] 
