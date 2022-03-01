const postData = async (path, body) => {
	try {
		return await (
			await fetch(`${process.env.VUE_APP_BACKEND_URL}${path}`, {
				method: 'post',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(body),
			})
		).json()
	} catch {
		alert('Error reaching backend')
	}
}

 const checkToken = async (token, signed_in) => {
	return await postData('/token', { token,  signed_in})
}

const postLogin = async (username, password) => {
	return await postData('/login', { username, password })
}

const TOKEN = "token"
const SIGNED_IN = "signed_in"


export { postLogin, checkToken, TOKEN, SIGNED_IN }
