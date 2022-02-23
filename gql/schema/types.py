from ariadne import MutationType, QueryType

MAIN_TYPEDEF = """
    type Query {
    commands:[Command]
    command(name:String!):Command!
    }
    """

query = QueryType()
mutation = MutationType()