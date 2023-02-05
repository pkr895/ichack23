from flask import Flask, request, render_template, url_for, redirect
import scraper
import os
from googlesearch import search

search_item = input("Search item: ")

searched = search(search_item + "wikipedia", stop=3, lang="en")
try:
    url = [i for i in searched if "https://en.wikipedia.org/wiki/" in i][0]
except:
    print("Nothing found.")
#print(urls[0])

#app = Flask(__name__)

#DB LAYOUT
#template = {"ID": x, "Name": event_name, "Date": "1939-1949", "Summary": "this happened then that happened ...", "Longitude": xxxxx, "Latitude": yyyyy "Tags": "A, B, C"}
#_ = timelines.insert_one(template)

webscraper = scraper.webscraperManager(url)

webscraper.generateMainSoup()

title = webscraper.getTitle()

lat, long = webscraper.getLocation()

query = webscraper.topNParagraphsOfPage()

date = webscraper.getDate()

print(title)
print(lat, long)
print(query)
print(date)