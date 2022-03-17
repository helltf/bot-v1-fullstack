import json

from utility.date_parser import parse_unix_date


class ColorHistory:
    def __init__(self, raw):
        self.id, color_history, last_change, register_time = raw
        self.history = json.loads(color_history)
        self.last_change = parse_unix_date(last_change)
        self.register_time = parse_unix_date(register_time)


class Cookie:
    def __init__(self, amount, resets, average, last_claim, last_reset):
        self.last_claim = parse_unix_date(last_claim)
        self.last_reset = parse_unix_date(last_reset)
        self.amount = amount
        self.resets = resets
        self.average = average


class Rps:
    def __init__(self, raw):
        self.id, self.draw, self.win, self.lose = raw


class Timeout:
    def __init__(self, amount, first, last):
        self.amount = amount
        self.first_channel = first
        self.last_channel = last


class Ban:
    def __init__(self, amount, first, last):
        self.amount = amount
        self.first_channel = first
        self.last_channel = last
