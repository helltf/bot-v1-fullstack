from typing import List

from schema.types import query
from graphql import GraphQLResolveInfo
from data import Command, all_commands, get_command

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
def resolve_command(_, info: GraphQLResolveInfo, name: str) -> Command:
    return get_command(name)
