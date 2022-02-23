class Command:
    name: str
    count: int
    required_Permissions: int

    def __init__(self, name, count, required_Permissions):
        self.name = name
        self.count = count
        self.required_Permissions = required_Permissions


COMMANDS = [
    Command("abvv", 3, 3),
    Command("erw", 3, 3),
    Command("gds", 3, 3),
    Command("sad", 3, 3)
]


def all_commands():
    return COMMANDS


def get_command(name: str):
    for command in COMMANDS:
        if command.name == name:
            return command
    return
