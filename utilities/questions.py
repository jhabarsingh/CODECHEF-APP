from bs4 import BeautifulSoup
import requests
import json

url = "https://www.codechef.com/"

html_content = requests.get(url).text

soup = BeautifulSoup(html_content, "lxml")

