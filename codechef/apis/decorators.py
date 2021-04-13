from bs4 import BeautifulSoup
import requests
import json
import re


def user_exists(fun):
	def authorized(request, *args, **kwargs):
		username = request.GET.get("username", "jhabarsingh")
		url = "https://www.codechef.com/users/" + username

		html_content = requests.get(url).text

		soup = BeautifulSoup(html_content, "lxml")
		title = soup.title

		if username in title:
			return fun(request, *args, **kwargs)
		else:
			obj = {
				"details": "Username Does't exist"
			}
			return Response(obj)

	return authorized