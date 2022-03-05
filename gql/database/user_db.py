from typing import Dict, Any

from classes.user_class import User
from database.database import get_one


def get_user(filter: Dict[str, Any]):
    if "username" not in filter and "twitch_id" not in filter:
        return None

    raw_user = get_one("TWITCH_USER", filter)
    return User(raw_user)