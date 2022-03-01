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

import router from '../router'
import { useCookies } from 'vue3-cookies'
import {postLogin, checkToken, TOKEN, SIGNED_IN} from '../request/login'

const { cookies } = useCookies()

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


</script>
<style>
@import './LoginField.css';
</style>
