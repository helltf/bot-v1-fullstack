
const TOKEN = "token"
const SIGNED_IN = "signed_in"

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

 const checkToken = async (cookies) => {
     let token = cookies.get(TOKEN)
     let signed_in = cookies.get(SIGNED_IN)
     let {success} =  await postData('/token', { token,  signed_in})

     if(!success){
			cookies.remove(TOKEN)
			cookies.remove(SIGNED_IN)
     }

	return success
}

const postLogin = async (username, password) => {
	return await postData('/login', { username, password })
}


export { postLogin, checkToken, TOKEN, SIGNED_IN }
