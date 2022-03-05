from ariadne import MutationType, QueryType, ObjectType

MAIN_TYPEDEF = """
    type Query {
        commands:[Command]
        command(name:String, id:ID):Command
        user(username:String, id:ID): User
    }
    
    """

query = QueryType()
mutation = MutationType()
