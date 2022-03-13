<template>
	<div class="wrapper">
		<div class="top-container"></div>
		<div class="container">
			<div v-if="!loading" class="form-wrapper">
				<form class="login-form" @keyup.enter="submit(username, password)">
					<fieldset class="login-fieldset">
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
							<div class="login-btns">
								<button class="submit-btn" @click="submit(username, password)">
									Log in
								</button>
								<a class="submit-btn" v-bind:href="getTwitchLoginUrl">
									Twich Login
								</a>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { postLogin } from '../../js-functions/request/login'

export default {
	name: 'LoginField',
	data() {
		return {
			username: '',
			password: '',
			loading: false,
		}
	},
	methods: {
		async submit(username, password) {
			await postLogin(username, password)
		},
	},
	computed: {
		getTwitchLoginUrl() {
			return process.env.VUE_APP_TWITCH_LOGIN
		},
	},
}
</script>
<style>
@import './LoginField.css';
</style>
