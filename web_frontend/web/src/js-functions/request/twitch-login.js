import { validateToken } from './twitch-request'
import { errorNotification } from '../notification'

const checkAccessToken = async (access_token) => {
	let { success } = await validateToken(access_token)

	return success
}

function getUserAccessToken(input) {
	if (!input.startsWith('#/access_token=')) {
		return undefined
	} else {
		return getAccessTokenFromInput(input)
	}
}

function getAccessTokenFromInput(input) {
	return input.slice(2).split('&')[0].split('=')[1]
}

async function getUsername(access_token) {
	if (!access_token) return undefined
	const { data, success, error } = await validateToken(access_token)
	if (success) {
		return data.login
	} else {
		errorNotification('Twitch', error)
	}
}

export { checkAccessToken, getUserAccessToken, getUsername }
