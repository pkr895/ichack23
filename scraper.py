import requests

url = "https://simple.wikipedia.org/wiki/World_War_II"

page = requests.get(url)

print(page.content, "html.parser")
