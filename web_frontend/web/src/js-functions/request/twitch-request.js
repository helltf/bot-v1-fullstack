import {Resource} from '../class/Resource'

const validateToken = async (token) => {
	try {
		return Resource.ok(await (
			await fetch(`https://id.twitch.tv/oauth2/validate`, {
				headers: {
					'content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
				}
			})
		).json())
	} catch {
		return Resource.error('could not validate token')
	}
}

const getTwitchUserInfo = async(token) => {
	try {
		return Resource.ok(await (
			await fetch(`https://api.twitch.tv/helix/users`, {
				headers: {
					'content-type': 'application/json',
                    'Authorization': `Bearer ${token}`,
					'Client-id': process.env.VUE_APP_CLIENT_ID
				}
			})
		).json())
	} catch {
		return Resource.error('could fetch user data')
	}
}



export {
    validateToken,
	getTwitchUserInfo
}