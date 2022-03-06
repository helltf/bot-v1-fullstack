import { request, gql } from 'graphql-request'


const getUserStats = async (user) => {
    const query = gql`
    query{
        user(username:"${user}"){
            id,
            username,
            color,
            permissions,
            register_time,
            display_name,
            stats{
                color_history{
                    last_change,
                    history,
                    register_time
                },
                rps{
                    draw, win, lose
                },
                cookie{
                    amount, average, resets
                },
                ban{
                    amount
                },
                timeout{
                    amount
                }
    
            }
        }
    }
    `
    return await request(process.env.VUE_APP_GQL_URL, query)
}

export {getUserStats}