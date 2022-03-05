from graphql.type.schema import GraphQLSchema
from ariadne import make_executable_schema, load_schema_from_path
from schema.types import MAIN_TYPEDEF, mutation, query, user
from schema.command import COMMAND_TYPEDEF
from schema.twitch_user import TWITCH_USER_TYPEDEF, STATS_TYPEDEF

def create_schema() -> GraphQLSchema:
    return make_executable_schema([MAIN_TYPEDEF, COMMAND_TYPEDEF, TWITCH_USER_TYPEDEF, STATS_TYPEDEF], [query, user])
