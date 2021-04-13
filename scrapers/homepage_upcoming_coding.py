from bs4 import BeautifulSoup
import requests
import json

url = "https://www.codechef.com/"

html_content = requests.get(url).text

soup = BeautifulSoup(html_content, "lxml")

upcoming_contest = soup.find("div", attrs={"id": "upcoming-timer"}).find("a")

details = {}

details["url"] = upcoming_contest["href"]
details["contest"] = upcoming_contest.text
print(details)

