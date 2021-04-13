from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from .serializers import ContestsSerializer
from bs4 import BeautifulSoup
from .decorators import user_exists
from .utilities import check_user
import requests
import json
import re

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
        	serializers.append(obj)

        contests = serializers
        return Response(contests)


class UsersDetail(APIView):
    """
    View to list all contests in the system.
    """

    def get(self, request, format=None):
        """
        Return detail of the users.
        GET: /?username=jhabarsingh
        """
        username = request.GET.get("username", "jhabarsingh")
        url = "https://www.codechef.com/users/" + username
        
        html_content = requests.get(url).text
        soup = BeautifulSoup(html_content, "lxml")
        print(check_user(username, soup.title))
        if not check_user(username, soup.title):
            obj = {
                "details": "Username Does't exist"
            }
            return Response(obj)

        rating = soup.find("div", attrs={"class": "rating-header"})
        rating_number = rating.find("div", attrs={"class": "rating-number"}).text
        highest_rating = rating.find("small").text[1:-1]
        stars = rating.find_all("span")
        stars = len(stars)
        user_details = soup.find("div", attrs={"class": "user-details-container"})

        name = user_details.find("header").find("h2").text
        data = user_details.find_all("li")

        details = {}
        details["name"] = name
        details["rating"] = rating_number
        details["stars"] = stars
        details["highest_rating"] = highest_rating

        for i in range(len(data)):
            if(i == 0):
                continue
            elif(i == 8):
                break
            try:
                label = data[i].find("label").text
                span = data[i].find("span").text
                details[label] = span   
            except:
                pass

        return Response(details)


class QuestionsDetail(APIView):
    """
    View to list all contests in the system.
    """

    def get(self, request, format=None):
        """
        Return a list of questions solved by users.
        """
        username = request.GET.get("username", "jhabarsingh")
        url = "https://www.codechef.com/users/" + username
        
        html_content = requests.get(url).text
        soup = BeautifulSoup(html_content, "lxml")

        details = {}

        script = str(soup.find_all("script"))

        questions = re.findall(r"y:\d+", script)

        nums = []
        for i in questions[:-1]:
            a = i.split(':')[-1]
            nums.append(a)

        questions = {}
        questions["solutions_partially_accepted"] = nums[0]
        questions["compile_error"] = nums[1]
        questions["runtime_error"] = nums[2]
        questions["time_limit_exceeded"] = nums[3]
        questions["wrong_answers"] = nums[4]
        questions["solution_accepted"] = nums[5]

        details["questions"] = questions

        return Response(details)


class ContestsDetail(APIView):
    """
    View to list all contests in the system.
    """

    def get(self, request, format=None):
        """
        Return a list of contests given by users.
        """
        username = request.GET.get("username", "jhabarsingh")
        url = "https://www.codechef.com/users/" + username
        
        html_content = requests.get(url).text
        soup = BeautifulSoup(html_content, "lxml")

        details = {}
        
        script = soup.find_all("script")
        
        string = ""
        for i in script:
            if "code" in str(i) and "getyear" in str(i):
                string = str(i)
        
        contests = re.findall(r"{.+[:,].+}|\[.+[,:].+\]", string)
        for i in contests:
            if "code" in str(i) and "getyear" in str(i):
                string = str(i)

        if(len(string.strip()) == 0):
            obj = {
                "detail": "No Contest Given Yet"
            }
            return Response(obj)
        data = json.loads(string)
        details["data"] = data
        return Response(details)


class AnnouncementsDetail(APIView):
    """
    View to list all contests in the system.
    """

    def get(self, request, format=None):
        """
        Return a list of cannouncements.
        """
        url = "https://www.codechef.com/"
        
        html_content = requests.get(url).text
        
        soup = BeautifulSoup(html_content, "lxml")
        
        announcements = soup.find_all("div", attrs={"class": "widget"})[3]
        announcements = announcements.find("ul", attrs={"class": "announcements"}).find_all("li")
        
        obj = {} 
        obj["announcements"] = []
        
        for i in announcements:
            data = {}

            urls = i.find("a")
            data["content"] = i.text.strip("\n")
            data["url"] = urls["href"]
            data["url_text"] = urls.text
            obj["announcements"].append(data)


        return Response(obj)


class UpcomingContestDetail(APIView):
    """
    View to list all contests in the system.
    """

    def get(self, request, format=None):
        """
        Return upcoming contest.
        """
        url = "https://www.codechef.com/"

        html_content = requests.get(url).text

        soup = BeautifulSoup(html_content, "lxml")

        upcoming_contest = soup.find("div", attrs={"id": "upcoming-timer"}).find("a")

        details = {}

        details["url"] = upcoming_contest["href"]
        details["contest"] = upcoming_contest.text

        return Response(details)




