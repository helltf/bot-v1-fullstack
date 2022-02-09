<template>
<div class="wrapper">
	<div class="top-container"></div>
<div class="container">
	<div v-if="!loading" class="form-wrapper">
		<form class="login-form" @keyup.enter="submit(username, password)">
			<fieldset>
				<legend>Login</legend>
				<span class="error-msg">{{errormessage}}</span>
				<div class="inner-login">
				<input
					class="input-username"
					type="text"
					required
					v-model="username"
					placeholder="Enter email"
				/>
				<input
					class="input-password"
					type="password"
					required
					v-model="password"
					placeholder="Password"
				/>
				<button class="submit-btn" @click="submit(username, password)">
					Log in
				</button>
				</div>
			</fieldset>
		</form>
	</div>
</div>
</div>
</template>

<script>
require('dotenv').config()
import router from '../router'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
let TOKEN = "token"
let SIGNED_IN = "signed_in"

export default {
	name: 'LoginField',
	async mounted() {
		this.loading = true
		let { success } = await checkToken(cookies.get(TOKEN), cookies.get(SIGNED_IN))
		if (success) {
			router.push("/")
		}else{
			cookies.remove(TOKEN)
			cookies.remove(SIGNED_IN)
		}
		this.loading = false

	},
	data() {
		return {
			username: '',
			password: '',
			url: process.env.VUE_APP_URL,
			loading: false,
			errormessage:null
		}
	},
	methods: {
		async submit (username, password){
			let { success, token, username:user_login, error} = await postLogin(username, password)
			if (success) {
				cookies.set(TOKEN, token, '24h')
				cookies.set(SIGNED_IN, user_login, '24h')
				router.push('/')
			}else{
				this.errormessage = error
				this.password =""
			}
		},
	},
}
async function checkToken(token, signed_in) {
	return await postData('/token', { token,  signed_in})
}

async function postLogin(username, password) {
	return await postData('/login', { username, password })
}

async function postData(path, body) {
	try{	
		return await (
		await fetch(`${process.env.VUE_APP_BASE_PATH}${path}`, {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify( body ),
		})
	).json()
	}catch{
		alert("Error reaching backend")
	}
}
</script>
<style>
@import './LoginField.css';
</style>
