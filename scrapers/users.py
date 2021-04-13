from bs4 import BeautifulSoup
import requests
import json
import re

url = "https://www.codechef.com/users/jhabarsingh"

html_content = requests.get(url).text

soup = BeautifulSoup(html_content, "lxml")


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
	
	label = data[i].find("label").text
	span = data[i].find("span").text
	details[label] = span	

script = soup.find_all("script")

string = ""
for i in script:
	if "code" in str(i) and "getyear" in str(i):
		string = str(i)

contests = re.findall(r"{.+[:,].+}|\[.+[,:].+\]", string)


for i in contests:
	if "code" in str(i) and "getyear" in str(i):
		string = str(i)

string = string.replace("\\", " ")
print(string)