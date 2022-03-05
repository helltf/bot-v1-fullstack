from typing import Dict, Any

from classes.command_class import Command
from database.database import get_one
from database import database


def all_commands():
    raw_command_list = database.execute_query_all("SELECT * FROM commands")
    commands = map(lambda x: Command(x), raw_command_list)
    return commands


def get_command(filter: Dict[str, Any]):
    raw_command = get_one("commands", filter)
    return Command(raw_command)