import re

months = [
"January", "February", "March", "April", "May"
]

query = "The heritage of the Classical Era is still evident in the city, represented by ancient monuments, and works of art, the most famous of all being the Parthenon, considered a key landmark of early Western civilization. The city also retains Roman, Byzantine and a smaller number of Ottoman monuments, while its historical urban core features elements of continuity through its millennia of history. Athens is home to two UNESCO World Heritage Sites, the Acropolis of Athens and the medieval Daphni Monastery. Landmarks of the modern era, dating back to the establishment of Athens as the capital of the independent Greek state in 1834, include the Hellenic Parliament and the so-called 'Architectural Trilogy of Athens', consisting of the National Library of Greece, the National and Kapodistrian University of Athens, and the Academy of Athens. Athens is also home to several museums and cultural institutions, such as the National Archeological Museum, featuring the world's largest collection of ancient Greek antiquities, the Acropolis Museum, the Museum of Cycladic Art, the Benaki Museum, and the Byzantine and Christian Museum. Athens was the host city of the first modern-day Olympic Games in 1896, and 108 years later it hosted the 2004 Summer Olympics, making it one of the few cities to have hosted the Olympics more than once.[21] Athens joined the UNESCO Global Network of Learning Cities in 2016."

reg = re.compile('\d{2}\s+[a-zA-Z]+\s+\d{4}|\d{1}\s+[a-zA-Z]+\s+\d{4}|[a-zA-Z]+\s+\d{4}|\d{4}')

list = reg.findall(query)
for w in list:
    print(w)
