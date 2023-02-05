import re
import requests
from bs4 import BeautifulSoup

class webscraperManager():
    def __init__(self, url):
        self.url = url
        urlParts = self.url.split(".")

        self.baseUrl = urlParts[0] + "." + urlParts[1] + "." + urlParts[2].split("/")[0]
        self.soup = None

    def removeSquareBrackets(self, text):
        text = re.sub("\[[^\]]*\]", "", text)
        return text


    def topNParagraphsOfPage(self): 
        final = ""
        newpTags = self.main.findChildren("p", recursive=False)

        for pTag in newpTags[:2]:
            text = pTag.text
            text = self.removeSquareBrackets(text)

            final += text 

        return final

    def generateMainSoup(self): 
        page = requests.get(self.url)
        self.soup = BeautifulSoup(page.content, "html.parser")

        superMain = self.soup.find_all("div", {"id": "mw-content-text"})[0]

        self.main = False

        for mainTag in superMain.findChildren("div", recursive=False):
            if mainTag["class"][0] == "mw-parser-output":
                self.main = mainTag
                break

        #return self.main, self.soup

    def getTitle(self):
        heading = self.soup.find("h1", {"id": "firstHeading"}).findChild("span", recursive=False).text
        return heading

    def getLocation(self):
        lat = self.soup.find("span", {"class": "latitude"})
        long = self.soup.find("span", {"class": "longitude"})
        if lat != None and long != None:
            return lat.text, long.text
        return None, None

    def getDate(self):
        try:
            infobox = self.soup.find("table", {"class": "infobox"})
            date = infobox.find("th", text="Date").find_next_sibling("td")
            date = date.text.strip().split("[")[0]
            match = re.search(r'[^–a-zA-Z0-9\s]', date)
            if match is not None:
                clean = date[:match.span()[0]]
                if len(clean) < 4:
                    return re.search(r'\d{4}', date).group()
                return clean
            return date        
        except:
            return None

    def topNParagraphsOfTag(self, tag):
        aTag = tag.findChildren("a", recursive=False)[0]
        newUrl = self.baseUrl + aTag["href"]
        
        newMain, newSoup = self.generateMainSoup(newUrl)

        text = self.topNParagraphsOfPage(newMain)  

        return [aTag.text, text]

 
    def headingIterationParagraphs(self):
            
        headingsContent = []
        
        kiddieTags = self.main.findChildren(recursive=False)

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
                            headingsContent.append(self.topNParagraphsOfTag(kid))

                            theShowDown = True

                if not theShowDown:
                    if kid.name == "p":
                        text = kid.text
                        text = self.removeSquareBrackets(text).strip()
                        headingsContent.append([previousHeading.text, text])

                justHadHeading = False

        return headingsContent

########################shits deprecated wallah back off
    # def headingIteration(self, main): ####DEPRECIATED
    #     hTags = main.findChildren(["h2", "h3", "h4"], recursive=False)
    #     for hTag in hTags:
    #         text = hTag.text
    #         text = removeSquareBrackets(text)
    #         print(text)

    # def mainArticleIteration(self, soup): #####DEPRECIATED
    #     mainTags = soup.find_all("div", {"class": "hatnote navigation-not-searchable"})

    #     for mainTag in mainTags:
    #         topNParagraphsOfTag(mainTag)


    # def everySentence(self, tags): #DEPRECIATED
    #     for pTag in tags:
    #         text = pTag.text
    #         text = re.sub("\[\d+\]", "", text)
            
    #         sentences = text.split(".")

    #         for sentence in sentences:
    #             sent = sentence.strip()
                
    #             if len(sent) != 0:
    #                 sent = sentence.strip() + "."

    #                 match = re.search(r".*([1-2][0-9]{3})",sent)

    #                 if match:
    #                     end = match.span()[1]
    #                     start = end - 4
    #                     print(sent, sent[start:end])


