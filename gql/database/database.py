from typing import Dict, Any

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


def execute_query_all(query: str, values=None):
    new_con = connect_db()
    values = values if values is not None else []
    cursor = new_con.cursor(buffered=True)
    cursor.execute(query, values)
    result = cursor.fetchall()
    cursor.close()
    new_con.close()
    return result


def execute_query_one(query: str, values=None):
    new_con = connect_db()
    values = values if values is not None else []
    cursor = new_con.cursor(buffered=True)
    cursor.execute(query, values)
    result = cursor.fetchone()
    cursor.close()
    new_con.close()
    return result


def get_one(tablename: str, filter: Dict[str, Any]):
    query = "SELECT * FROM {}".format(tablename)

    for k, v in filter.items():
        query += " WHERE {} = %s".format(k)

    raw = execute_query_one(query, list(filter.values()))

    return raw
