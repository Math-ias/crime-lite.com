import csv
import json
JSON_OUTPUT = "lights.js"
with open('streetlight-locations.csv') as lightcsv:
    reader = csv.reader(lightcsv)
    lightfile = list(reader)[1:]
    lightlist = []
    for light in lightfile:
        lightlat = float(light[0])
        lightlong = float(light[1])
        lightlist.append(lightlat)
        lightlist.append(lightlong)
    with open(JSON_OUTPUT, 'w') as jsonfile:
        jsonfile.write(json.dumps(lightlist))
