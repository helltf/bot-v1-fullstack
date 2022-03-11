import { Resource } from "../class/Resource"
import {errorNotification} from '../notification'
const TOKEN = "token"
const SIGNED_IN = "signed_in"

const postData = async (path, body) => {
	try {
		return Resource.ok(await (
			await fetch(`${process.env.VUE_APP_BACKEND_URL}${path}`, {
				method: 'post',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(body),
			})
		).json())
	} catch {
		return Resource.error('Error reaching backend')
	}
}

 const checkToken = async (cookies) => {
     let token = cookies.get(TOKEN)
     let signed_in = cookies.get(SIGNED_IN)

     let {data, success, error} =  await postData('/token', { token,  signed_in})

	if(!success){
		errorNotification('Login', error)
		return false
	}

     if(!data.login_valid){
			cookies.remove(TOKEN)
			cookies.remove(SIGNED_IN)
     }

	return data.login_valid
}

const postLogin = async (username, password) => {
	return await postData('/login', { username, password })
}


export { postLogin, checkToken, TOKEN, SIGNED_IN }
