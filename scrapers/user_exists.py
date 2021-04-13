from bs4 import BeautifulSoup
import requests
import json
import re


username = "jhabarsingh"
url = "https://www.codechef.com/users/" + username

html_content = requests.get(url).text
soup = BeautifulSoup(html_content, "lxml")

print(soup.title)