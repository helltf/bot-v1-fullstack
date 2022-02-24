from typing import Dict, Any

from classes.command_class import Command
from database import database


def all_commands():
    raw_command_list = database.execute_query_all("SELECT * FROM commands")
    commands = map(lambda x: Command(x), raw_command_list)
    return commands


def get_command(filter_info: Dict[str, Any]):
    query = "SELECT * FROM commands"
    for k, v in filter_info.items():
        query += " WHERE {} = %s".format(k)
    raw_command = database.execute_query_one(query, list(filter_info.values()) )
    return Command(raw_command)
