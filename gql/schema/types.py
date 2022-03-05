from ariadne import MutationType, QueryType, ObjectType
from graphql import GraphQLResolveInfo

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
    return {id: parent.id}
