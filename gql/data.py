from typing import Dict, Any

from classes.command_class import Command
from classes.user_class import User
from database import database


def all_commands():
    raw_command_list = database.execute_query_all("SELECT * FROM commands")
    commands = map(lambda x: Command(x), raw_command_list)
    return commands


def get_command(filter: Dict[str, Any]):
    raw_command = get_one("commands", filter)
    return Command(raw_command)


def get_user(filter: Dict[str, Any]):
    if "username" not in filter and "twitch_id" not in filter:
        return None

    raw_user = get_one("TWITCH_USER", filter)
    return User(raw_user)


def get_one(tablename: str, filter: Dict[str, Any]):
    query = "SELECT * FROM {}".format(tablename)

    for k, v in filter.items():
        query += " WHERE {} = %s".format(k)

    raw = database.execute_query_one(query, list(filter.values()))

    return raw
