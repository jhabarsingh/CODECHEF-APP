from django.contrib import admin
from django.urls import path, include
from .views import (
	ListContests
)

app_name = "apis"

urlpatterns = [
    path('contests/', ListContests.as_view(), name="contests"),
]
