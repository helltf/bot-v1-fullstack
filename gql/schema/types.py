from ariadne import MutationType, QueryType, ObjectType

MAIN_TYPEDEF = """
    type Query {
        commands:[Command]
        command(name:String, id:ID):Command!
        user(username:String, twitch_id:ID): User!
    }
    """

query = QueryType()
user = ObjectType("User")
mutation = MutationType()
