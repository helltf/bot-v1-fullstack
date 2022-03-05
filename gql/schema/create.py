from graphql.type.schema import GraphQLSchema
from ariadne import make_executable_schema
from schema.stats import STATS_TYPEDEF, STATS_TYPEDEF_LIST
from schema.types import MAIN_TYPEDEF, mutation, query, user, stats
from schema.command import COMMAND_TYPEDEF
from schema.twitch_user import TWITCH_USER_TYPEDEF


def create_schema() -> GraphQLSchema:
    type_def_list = [MAIN_TYPEDEF, COMMAND_TYPEDEF, TWITCH_USER_TYPEDEF, STATS_TYPEDEF]
    type_def_list.extend(STATS_TYPEDEF_LIST)
    return make_executable_schema(
        type_def_list,
        [query, user, stats])
