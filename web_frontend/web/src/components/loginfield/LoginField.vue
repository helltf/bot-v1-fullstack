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

import router from '../../router'
import {postLogin, TOKEN, SIGNED_IN} from '../../js-functions/request/login'
import { inject } from '@vue/runtime-core'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default {
	name: 'LoginField',
	async mounted() {
		if(this.current_user !== null){
			router.push('/')
		}
	},
	data() {
		return {
			username: '',
			password: '',
			loading: false,
			errormessage:null
		}
	},
	setup(){
		return {
			current_user: inject('user'),
			setUser: inject('setUser')
		}
	},
	methods: {
		async submit (username, password){
			let { success, token, username:user_login, error} = await postLogin(username, password)
			if (success) {
				cookies.set(TOKEN, token, '24h')
				cookies.set(SIGNED_IN, user_login, '24h')
				this.current_user = user_login
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
