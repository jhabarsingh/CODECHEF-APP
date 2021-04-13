from bs4 import BeautifulSoup
import requests
import json

url = "https://clist.by/"

html_content = requests.get(url).text

soup = BeautifulSoup(html_content, "lxml")

contests = soup.find("div", attrs={"id": "contests"})

contest_list= []
for i in contests.find_all("div", attrs={"class": "running"}):
	data = i.find("a", attrs={"class": "data-ace"})
	data = data["data-ace"]
	data = json.loads(data)
	contest_list.append(data)

print(contest_list)
