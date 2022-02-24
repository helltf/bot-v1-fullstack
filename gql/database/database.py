from mysql import connector as db
import os
from dotenv import load_dotenv

load_dotenv()


def connect_db():
    return db.connect(
        host=os.getenv('HOST'),
        user=os.getenv('USER'),
        password=os.getenv('PASSWORD'),
        database=os.getenv('DATABASE')
    )


twitch_db = connect_db()


def execute_query_all(query: str):
    cursor = twitch_db.cursor()
    cursor.execute(query)
    return cursor.fetchall()


def execute_query_one(query: str):
    cursor = twitch_db.cursor()
    cursor.execute(query)
    return cursor.fetchone()
