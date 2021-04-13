from django.contrib import admin
from django.urls import path, include
from .views import (
	ListContests,
	UsersDetail,
	QuestionsDetail,
	ContestsDetail
)

app_name = "apis"

urlpatterns = [
    path('contests/', ListContests.as_view(), name="contests"),
    path('details/', UsersDetail.as_view(), name="details"),
 	path('details/questions', QuestionsDetail.as_view(), name="questions"),
    path('details/contests', ContestsDetail.as_view(), name="contests"),
       
]
