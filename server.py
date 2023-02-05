from flask import Flask, request, render_template, url_for, redirect, jsonify
import scraper
from googlesearch import search


app = Flask(__name__)

def get_details(url):
    webscraper = scraper.webscraperManager(url)

    webscraper.generateMainSoup()

    title = webscraper.getTitle()

    lat, long = webscraper.getLocation()

    query = webscraper.topNParagraphsOfPage()

    date = webscraper.getDate()

    # print(title)
    # print(lat, long)
    # print(query)
    # print(date)

    return title, date, query, lat, long


@app.route("/", methods=['POST'])
def parseSearch():
    search_item = request.get_json()
    #search_item = input("Search item: ")

    searched = search(search_item + "wikipedia", stop=3, lang="en")
    try:
        url = [i for i in searched if "https://en.wikipedia.org/wiki/" in i][0]
        title, date, query, lat, long = get_details(url)
        return jsonify(title, date, query, lat, long)
    except:
        return None
