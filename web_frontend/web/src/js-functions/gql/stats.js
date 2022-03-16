import { gql } from 'graphql-request'
import { request } from './graphql-request'

const availableFields = {
	userFields: `id, username, color, permissions, register_time, display_name`,
	color_history: `last_change, history, register_time`,
	rps: `draw, win, lose`,
	cookie: `amount, average, resets`,
	ban: `amount, first_channel, last_channel`,
	timeout: `amount, first_channel, last_channel`,
}

const getUserQueryParam = (user) => {
	user = user.trim()
	return isNaN(user) ? `username:"${user}"` : `twitch_id:"${Number(user)}"`
}

const getStatsQuery = (user) => {
	const queryParams = getUserQueryParam(user)
	return gql`
    query{
        user(${queryParams}){
            ${availableFields.userFields}
            stats{
                color_history{
                    ${availableFields.color_history}
                },
                rps{
                    ${availableFields.rps}
                },
                cookie{
                    ${availableFields.cookie}
                },
                ban{
                    ${availableFields.ban}
                },
                timeout{
                    ${availableFields.timeout}
                }
    
            }
        }
    }
    `
}

const fetchUserInfo = (user) => {
	const queryParams = getUserQueryParam(user)

	const query = gql`
        query{
            user(${queryParams}){
                ${availableFields.userFields}
            }
        }
    `
	return request(process.env.VUE_APP_GQL_URL, query)
}

const fetchStatsField = (user, field) => {
	const queryParams = getUserQueryParam(user)

	const query = gql`
        query{
            user(${queryParams}){
                stats{
                    ${field}{
                        ${availableFields[field]}
                    }
                }
            }
        }
    `
	return request(process.env.VUE_APP_GQL_URL, query)
}

const getUserStats = async (user) => {
	const query = getStatsQuery(user)

	return request(process.env.VUE_APP_GQL_URL, query)
}

export { getUserStats, getUserQueryParam, fetchUserInfo, fetchStatsField }
