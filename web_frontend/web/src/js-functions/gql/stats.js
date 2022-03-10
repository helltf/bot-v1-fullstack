import { gql } from 'graphql-request'
import {request} from './graphql-request'
const userFields = `id, username, color, permissions, register_time, display_name,`
const colorHistoryFields = `last_change, history, register_time`
const rpsFields = `draw, win, lose`
const cookieFields = `amount, average, resets`

const getQueryParams = (user) =>{
    return isNaN(user) ? `username:"${user}"` : `twitch_id:"${Number(user)}"`
}

const getStatsQuery = (user) => {

    const queryParams = getQueryParams(user.trim())
	return gql`
    query{
        user(${queryParams}){
            ${userFields}
            stats{
                color_history{
                    ${colorHistoryFields}
                },
                rps{
                    ${rpsFields}
                },
                cookie{
                    ${cookieFields}
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

    return request(process.env.VUE_APP_GQL_URL, query)
}

export { getUserStats }
