 #!/usr/bin/env python3
import os
import json

BASE_URL = "https://raw.githubusercontent.com/jairomer/strudel/master/"
INDEX_FILE = "index.json"

# Assumming here that all songs are javascript files.
song_files = [f for f in os.listdir() if ".js" in f ]

try:
    os.remove(INDEX_FILE)
except Exception:
    # No file to remove
    pass

song_index = {
    "songs" : []
        }
for song_filename in song_files:
    song_details = {
        "name": song_filename[:-3],
        "path": BASE_URL + "/" + song_filename
    }
    print("New song")
    print("name: ", song_details["name"])
    print("path: ", song_details["path"])
    song_index["songs"].append(song_details)

json_index = json.dumps(song_index, indent=4)
with open(INDEX_FILE, "w") as idx_file:
    idx_file.write(json_index)
