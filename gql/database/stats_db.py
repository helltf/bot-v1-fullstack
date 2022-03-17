from builtins import len

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
    raw_cookies = execute_query_all("SELECT * FROM COOKIES WHERE USERNAME = %s ORDER BY TIME ASC", [name])
    for entry in raw_cookies:
        amount += entry[1]

    average = round(amount / len(raw_cookies))

    reset_count = execute_query_all("SELECT * FROM COOKIE_RESET WHERE USERNAME = %s ORDER BY TIME ASC", [name])

    return Cookie(amount, len(reset_count), average, raw_cookies[0][2], reset_count[0][1])


def get_ban_stats(name):
    result = execute_query_all("SELECT * FROM BANNED_USER WHERE USERNAME = %s ORDER BY TIME ASC", [name])
    return Ban(len(result), result[0][1], result[len(result) - 1][1])


def get_timeout_stats(name):
    result = execute_query_all("SELECT * FROM TIMEOUT_USER WHERE USERNAME = %s ORDER BY TIME ASC", [name])
    return Timeout(len(result), result[0][1], result[len(result) - 1][1])
