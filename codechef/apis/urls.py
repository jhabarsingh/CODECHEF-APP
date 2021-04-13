from django.contrib import admin
from django.urls import path, include
from .views import (
	ListContests,
	UsersDetail,
	QuestionsDetail,
	ContestsDetail,
	AnnouncementsDetail,
	UpcomingContestDetail
)

app_name = "apis"

urlpatterns = [
    path('contests/', ListContests.as_view(), name="contests"),
    path('user/', UsersDetail.as_view(), name="details"),
 	path('user/questions/', QuestionsDetail.as_view(), name="questions"),
    path('user/contests/', ContestsDetail.as_view(), name="contests"),
    path('announcements/', AnnouncementsDetail.as_view(), name="announcements"),
    path('upcoming-contest/', UpcomingContestDetail.as_view(), name="upcoming-contest")
]
