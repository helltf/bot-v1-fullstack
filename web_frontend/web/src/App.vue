<template>
	<Navbar />
	<router-view />

	<notifications
		classes="vue-notification notification-bar"
		position="center bottom"
		width="50%"
	/>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import router from './router'
import { checkAccessToken } from './js-functions/request/twitch-login'
import { provide, ref } from '@vue/runtime-core'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default {
	name: 'App',
	components: {
		Navbar,
	},
	setup() {
		const current_user = ref(undefined)
		provide('user', current_user)
		provide('setUser', (user) => {
			current_user.value = user
		})
	},
	async mounted() {
		let access_token = cookies.get('twitch_sign_in')
		if (!access_token) {
			checkAccessToken(access_token)
		} else {

			router.push('/login')
		}
	},
}
</script>

<style>
@import './App.css';
</style>
