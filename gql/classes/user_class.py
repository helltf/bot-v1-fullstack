from datetime import datetime


class User:
    username: str
    id: int
    color: str
    permissions: int
    register_time: datetime
    displayname: str

    def __init__(self, raw):
        username, twitch_id, color, permissions, register_time, displayname = raw
        self.username = username
        self.id = twitch_id
        self.color = color
        self.permissions = permissions
        print(register_time)
        self.register_time = datetime.fromtimestamp(register_time / 1000)
        self.displayname = displayname
