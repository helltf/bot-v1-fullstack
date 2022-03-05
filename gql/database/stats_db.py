from classes.stats_classes import ColorHistory, Rps
from database.database import get_one


def get_color_history(id):
    raw = get_one("COLOR_HISTORY", {"twitch_id": id})
    return ColorHistory(raw)


def get_rps_stats(id):
    raw = get_one("RPS_STATS", {"twitch_id": id})
    return Rps(raw)
