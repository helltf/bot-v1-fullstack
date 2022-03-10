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

export {
    validateToken
}