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

a = -10
script = str(soup.find_all("script")[a])

contests = re.findall(r"{.+[:,].+}|\[.+[,:].+\]", script)[-1]
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

contests = json.loads(contests)

details["questions"] = questions
details["contests"] = contests

print(json.dumps(details, indent=4))



