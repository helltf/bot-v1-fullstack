from ariadne import MutationType, QueryType, ObjectType

MAIN_TYPEDEF = """
    type Query {
        commands:[Command]
        command(name:String, id:ID):Command
    }
    
    """

query = QueryType()
mutation = MutationType()
