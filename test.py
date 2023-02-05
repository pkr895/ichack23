from googlesearch import search

query = input("Search item: ")

searched = search(query + "simple wikipedia", stop=3, lang="en")
urls = [i for i in searched if "https://simple.wikipedia.org/wiki/" in i]
print(urls[0])
