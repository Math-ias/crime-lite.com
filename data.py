import csv
import json
JSON_OUTPUT = "crimes.js"
import random
import math

with open('crime.csv') as csvfile:
    reader = csv.reader(csvfile)
    crimefile = list(reader)[1:]
    crimelist = []
    for crime in crimefile:
        crimelat = crime[0]
        crimelon = crime[1]
        if not crimelat == "":
            if not crimelat == "-1":
                crimelist.append(float (crimelat))
                crimelist.append(float (crimelon))
    with open(JSON_OUTPUT, 'w') as jsonfile:
        jsonfile.write(json.dumps(crimelist))