from ariadne import MutationType, QueryType, ObjectType
from graphql import GraphQLResolveInfo

from database.user_db import map_name_to_id, map_id_to_name

MAIN_TYPEDEF = """
    type Query {
        commands:[Command]
        command(name:String, id:ID):Command!
        user(username:String, twitch_id:ID): User!
    }
    """

query = QueryType()
user = ObjectType("User")
stats = ObjectType("Stats")
mutation = MutationType()


@user.field("stats")
def resolve(parent, info, **kwargs):
    result = None
    if not parent.id:
        result = map_name_to_id(parent.username)
    else:
        result = map_id_to_name(parent.id)
    return result