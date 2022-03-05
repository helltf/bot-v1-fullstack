from classes.stats_classes import ColorHistory, Rps, Cookie, Timeout, Ban
from database.database import get_one, execute_query_all


def get_color_history(id):
    raw = get_one("COLOR_HISTORY", {"twitch_id": id})
    return ColorHistory(raw)


def get_rps_stats(id):
    raw = get_one("RPS_STATS", {"twitch_id": id})
    return Rps(raw)


def get_cookie_stats(name):
    amount = 0
    raw_cookies = execute_query_all("SELECT * FROM COOKIES WHERE USERNAME = %s", [name])
    for entry in raw_cookies:
        amount += entry[1]

    average = round(amount / len(raw_cookies))

    reset_count = execute_query_all("SELECT COUNT(*) FROM COOKIE_RESET WHERE USERNAME = %s", [name])

    return Cookie(amount, reset_count[0][0], average)


def get_ban_stats(name):
    amount = execute_query_all("SELECT COUNT(*) FROM BANNED_USER WHERE USERNAME = %s", [name])
    return Ban(amount[0][0])


def get_timeout_stats(name):
    amount = execute_query_all("SELECT COUNT(*) FROM TIMEOUT_USER WHERE USERNAME = %s", [name])
    return Timeout(amount[0][0])
