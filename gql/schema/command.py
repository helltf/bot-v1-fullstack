from typing import List

from classes.command_class import Command
from schema.types import query
from graphql import GraphQLResolveInfo
from database.command_db import all_commands, get_command

COMMAND_TYPEDEF = """
    type Command{
        name: String!
        count: Int!
        required_permissions: Int!
        description: String!
        required_parameters: [String]!
        optional_parameters: [String]!
        id: Int!
    }
"""

@query.field("commands")
def resolve_commands(_, info: GraphQLResolveInfo) -> List[Command]:
    return all_commands()


@query.field("command")
def resolve_command(_, info: GraphQLResolveInfo,  **filter_info) -> Command:
    return get_command(filter_info)

