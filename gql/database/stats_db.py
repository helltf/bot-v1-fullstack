from classes.stats_classes import ColorHistory
from database.database import get_one


def get_color_history(id):
    raw = get_one("COLOR_HISTORY", {"twitch_id": id})
    return ColorHistory(raw)