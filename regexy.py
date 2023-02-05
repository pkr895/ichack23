import datetime
import re

dates = ["10 June 1942", "4 Bruh 1956", "June 1950", "during 1950", "1969", "21st august 1920", "30th19 December 1919"]
months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

for d in dates:
    x = d.split()
    if len(x) == 3:
        if x[1].lower() in months:
            try:
                n = re.findall(r'[0-9][0-9]', x[0])
                if len(n) == 1:
                    a = datetime.date(year=int(x[2]), month=months.index(x[1].lower()) + 1, day=int(n[0]))
                    print(d)
                else:
                    raise Exception
            except:
                print(f"{d} is an invalid date.")
        else:
            print(f"{d} is an invalid date.")
    elif len(x) == 2:
        if x[0].lower() in months:
            print(d)
        else:
            print(f"{d} is an invalid date")