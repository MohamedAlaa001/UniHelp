from django.urls import path
from . import views

urlpatterns = [

    path("login", views.login_view, name="login"),
    path("register", views.register, name="register"),
    path("submit_ticket", views.submit_ticket, name="submit_ticket"),
    path("view_tickets",views.view_ticket,name="view_ticket"),
    path("view_reply",views.view_reply,name="view_reply"),
    path("submit_reply",views.submit_reply,name="submit_reply"),
   
]