import json

from utility.date_parser import parse_unix_date


class ColorHistory:
    def __init__(self, raw):
        self.id, color_history, last_change, register_time = raw
        self.history = json.loads(color_history)
        self.last_change = parse_unix_date(last_change)
        self.register_time = parse_unix_date(register_time)



class Cookie:
    def __init__(self,amount, resets, average):
        self.amount = amount
        self.resets = resets
        self.average = average



class Rps:
    def __init__(self, raw):
        self.id, self.draw, self.win, self.lose = raw

class Timeout:
    def __init__(self, raw):
        pass



class Ban:
    def __init__(self):
        pass
