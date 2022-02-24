from mysql import connector as db
import os

twitch_db = db.connect(
    host=os.getenv('HOST')
)