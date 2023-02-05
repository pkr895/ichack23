import re
import requests
from bs4 import BeautifulSoup

class webscraperManager():
    def __init__(self, url):
        self.url = url
        urlParts = url.split(".")

        self.baseUrl = urlParts[0] + "." + urlParts[1] + "." + urlParts[2].split("/")[0]

    def removeSquareBrackets(text):
        text = re.sub("\[[^\]]*\]", "", text)
        return text


    def topNParagraphsOfPage(main): 
        final = ""
        newpTags = main.findChildren("p", recursive=False)

        for pTag in newpTags[:2]:
            text = pTag.text
            text = self.removeSquareBrackets(text)

            final += text 

        return final

    def generateMainSoup(url): 
        page = requests.get(url)
        soup = BeautifulSoup(page.content, "html.parser")

        superMain = soup.find_all("div", {"id": "mw-content-text"})[0]

        main = False

        for mainTag in superMain.findChildren("div", recursive=False):
            if mainTag["class"][0] == "mw-parser-output":
                main = mainTag
                break

        return main, soup

    def topNParagraphsOfTag(tag):
        aTag = tag.findChildren("a", recursive=False)[0]
        newUrl = baseUrl + aTag["href"]
        
        newMain, newSoup = self.generateMainSoup(newUrl)

        text = self.topNParagraphsOfPage(newMain)  

        return [aTag.text, text]

 
    def headingIterationParagraphs(main):
            
        headingsContent = []
        
        kiddieTags = main.findChildren(recursive=False)

        justHadHeading = False
        previousHeading = False

        for kid in kiddieTags:
            if kid.name in ["h2", "h3", "h4"]:
                previousHeading = kid
                justHadHeading = 2
            elif justHadHeading == 2:
                justHadHeading = 1
            elif justHadHeading == 1:
                theShowDown = False
                if kid.name == "div":
                    if "role" in kid.attrs:
                        if kid["role"] == "note":
                            headingsContent.append(topNParagraphsOfTag(kid))

                            theShowDown = True

                if not theShowDown:
                    if kid.name == "p":
                        text = kid.text
                        text = self.removeSquareBrackets(text).strip()
                        headingsContent.append([previousHeading.text, text])

                justHadHeading = False

        return headingsContent

########################shits deprecated wallah back off
    def headingIteration(main): ####DEPRECIATED
        hTags = main.findChildren(["h2", "h3", "h4"], recursive=False)
        for hTag in hTags:
            text = hTag.text
            text = removeSquareBrackets(text)
            print(text)

    def mainArticleIteration(soup): #####DEPRECIATED
        mainTags = soup.find_all("div", {"class": "hatnote navigation-not-searchable"})

        for mainTag in mainTags:
            topNParagraphsOfTag(mainTag)


    def everySentence(tags): #DEPRECIATED
        for pTag in tags:
            text = pTag.text
            text = re.sub("\[\d+\]", "", text)
            
            sentences = text.split(".")

            for sentence in sentences:
                sent = sentence.strip()
                
                if len(sent) != 0:
                    sent = sentence.strip() + "."

                    match = re.search(r".*([1-2][0-9]{3})",sent)

                    if match:
                        end = match.span()[1]
                        start = end - 4
                        print(sent, sent[start:end])


