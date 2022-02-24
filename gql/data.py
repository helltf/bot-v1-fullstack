from classes.command_class import Command
from database import database


def all_commands():
    raw_command_list = database.execute_query_all("SELECT * FROM commands")
    commands = map(lambda x: Command(x), raw_command_list)
    return commands


def get_command(name: str):
    raw_command = database.execute_query_one("SELECT * FROM commands WHERE name = '{}'".format(name))
    return Command(raw_command)
