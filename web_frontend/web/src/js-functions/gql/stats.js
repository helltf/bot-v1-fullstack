import { request, gql } from 'graphql-request'
import { Resource } from '../class/Resource'

const getStatsQuery = (user) => {
	return gql`
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
}

const getUserStats = async (user) => {
	const query = getStatsQuery(user)

	try {
		let res = await request(process.env.VUE_APP_GQL_URL, query)
		return Resource.ok(res)
	} catch (e) {
		return Resource.error(e)
	}
}

export { getUserStats }
