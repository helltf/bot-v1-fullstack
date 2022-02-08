<template>
	<div v-if="!loading" class="form-wrapper">
		<form class="login-form" @keyup.enter="submit(username, password)">
			<fieldset>
				<legend>Login</legend>
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
					Submit
				</button>
				</div>
			</fieldset>
		</form>
	</div>
</template>

<script>
require('dotenv').config()
import router from '../router'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default {
	name: 'LoginField',
	async mounted() {
		this.loading = true
		let { success } = await checkToken(cookies.get('login'), cookies.get('user_login'))
		if (success) {
			router.push("/")
		}
		this.loading = false
	},
	data() {
		return {
			username: '',
			password: '',
			url: process.env.VUE_APP_URL,
			loading: false
		}
	},
	methods: {
		submit: async (username, password) => {
			let { success, token, username:user_login} = await postLogin(username, password)
			if (success) {
				cookies.set('login', token, '24h')
				cookies.set('user_login', user_login, '24h')
				router.push('/')
			}
		},
	},
}
async function checkToken(token, user_login) {
	return await postData('/token', { token,  user_login})
}

async function postLogin(username, password) {
	return await postData('/login', { username, password })
}

async function postData(path, body) {
	return await (
		await fetch(`${process.env.VUE_APP_BASE_PATH}${path}`, {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify( body ),
		})
	).json()
}
</script>
<style>
@import './LoginField.css';
</style>
