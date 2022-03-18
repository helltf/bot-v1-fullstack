from typing import Dict, Any

from mysql import connector as db
import os
from dotenv import load_dotenv
from mysql.connector.cursor_cext import CMySQLCursor

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
    cursor, connection = get_cursor(query, values)

    result = cursor.fetchall()
    close_cursor_and_conn(cursor, connection)
    return result


def execute_query_one(query: str, values=None):
    cursor, connection = get_cursor(query, values)

    result = cursor.fetchone()
    close_cursor_and_conn(cursor, connection)
    return result


def get_cursor(query: str, values=None):
    connection = connect_db()
    values = values if values is not None else []

    cursor = connection.cursor(buffered=True)
    cursor.execute(query, values)
    return cursor, connection


def close_cursor_and_conn(cursor: CMySQLCursor, connection):
    cursor.close()
    connection.close()


def get_one(tablename: str, filter: Dict[str, Any]):
    query = "SELECT * FROM {}".format(tablename)

    for k, v in filter.items():
        query += " WHERE {} = %s".format(k)

    raw = execute_query_one(query, list(filter.values()))

    return raw
