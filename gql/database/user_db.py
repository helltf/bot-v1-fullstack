from typing import Dict, Any

from classes.user_class import User
from database.database import get_one


def get_user(filter: Dict[str, Any]):
    if "username" not in filter and "twitch_id" not in filter:
        return None

    raw_user = get_one("TWITCH_USER", filter)
    return User(raw_user)


def map_id_to_name(id):
    result = get_one("TWITCH_USER", {"twitch_id": id})
    
    if result is None:
        return

    return {"id": id, "name": result[0]}


def map_name_to_id(name):
    result = get_one("TWITCH_USER", {"username": name})

    if result is None:
        return None

    return {"id": result[1], "name": name}
