from datetime import datetime


def parse_unix_date(ts):
    return datetime.fromtimestamp(ts / 1000)