from typing import List
from classes.user_class import User
from schema.types import query, user
from graphql import GraphQLResolveInfo
from data import get_user, get_stats

TWITCH_USER_TYPEDEF = """
    type User{
        username: String!
        id: ID!
        color: String
        permissions: Int!
        register_time: String!
        display_name: String
        stats: Stats
    }
"""



@query.field("user")
def resolve_twitch_user(_, info: GraphQLResolveInfo, **kwargs) -> User:
    return get_user(kwargs)

