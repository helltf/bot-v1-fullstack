from graphql import GraphQLResolveInfo

from database.stats_db import get_color_history
from schema.types import stats

STATS_TYPEDEF = """
    type Stats{
        id:ID!
        color_history: ColorHistory
        cookie: CookieStats
        rps: RpsStats
        timeout: TimeoutStats
        ban: BanStats
    }
"""
COLOR_HISTORY_TYPEDEF = """
    type ColorHistory{
        id:ID!
        history:[String]
        last_change: String
        register_time: String
    }
"""

COOKIE_TYPEDEF = """
    type CookieStats{
        name:String!
    }
"""

RPS_TYPEDEF = """
    type RpsStats{
        id:ID!
        draw: Int
        win: Int
        lose: Int
    }
"""

TIMEOUT_TYPEDEF = """
    type TimeoutStats{
        name:String!
    }
"""

BAN_TYPEDEF = """
    type BanStats{
        name:String!
    }
"""

STATS_TYPEDEF_LIST = [COLOR_HISTORY_TYPEDEF, COOKIE_TYPEDEF, RPS_TYPEDEF, TIMEOUT_TYPEDEF, BAN_TYPEDEF]


@stats.field("color_history")
def resolve_color_history(parent, info: GraphQLResolveInfo, **kwargs):
    return get_color_history(parent.get(id))
