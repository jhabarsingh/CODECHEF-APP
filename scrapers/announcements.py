from bs4 import BeautifulSoup
import requests
import json

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

print(json.dumps(obj, indent=3))
