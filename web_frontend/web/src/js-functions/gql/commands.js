import { request, gql } from 'graphql-request'

const getCommands = async () => {
    const query = gql`
    query {
        commands{
            name,
            count,
            description,
            required_permissions,
            required_parameters,
            optional_parameters
        }
    }
    `

    return (await request(process.env.VUE_APP_GQL_URL, query)).commands
}


export {getCommands}