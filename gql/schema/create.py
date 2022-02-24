from graphql.type.schema import GraphQLSchema
from ariadne import make_executable_schema
from schema.types import MAIN_TYPEDEF, mutation, query
from schema.command import COMMAND_TYPEDEF


def create_schema() -> GraphQLSchema:
    return make_executable_schema([MAIN_TYPEDEF, COMMAND_TYPEDEF], [query])
