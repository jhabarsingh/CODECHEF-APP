from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from .serializers import ContestsSerializer
from bs4 import BeautifulSoup
import requests
import json

class ListContests(APIView):
    """
    View to list all contests in the system.
   	"""

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        url = "https://clist.by/"

		html_content = requests.get(url).text

		soup = BeautifulSoup(html_content, "lxml")

		contests = soup.find("div", attrs={"id": "contests"})

		serializers = []
		for i in contests.find_all("div", attrs={"class": "running"}):
			data = i.find("a", attrs={"class": "data-ace"})
			data = data["data-ace"]
			data = json.loads(data)
			obj = {}
			obj["event"] = data["title"]
			obj["url"] = data["desc"][5:]
			obj["organization"] = data["location"]
			obj["start_time"] = data["time"]["start"]
			obj["end_time"] = data["time"]["end"]
			serializer = ContestsSerializer(obj)
			serializers.append(serializer)

		contests = serializers
        return Response(contests)