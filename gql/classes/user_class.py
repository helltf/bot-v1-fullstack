from datetime import datetime

from utility.date_parser import parse_unix_date


class User:
    username: str
    id: int
    color: str
    permissions: int
    register_time: datetime
    display_name: str

    def __init__(self, raw):
        self.username, self.id, self.color, self.permissions, register_time, self.display_name = raw
        self.register_time = parse_unix_date(register_time)
