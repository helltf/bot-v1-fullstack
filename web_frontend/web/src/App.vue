<template>
	<Navbar />
	<router-view />
	<div class="notification-wrapper">
		<notifications position="center bottom" width="40%" />
	</div>
</template>

<script>
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import Navbar from './components/navbar/Navbar.vue'
import router from './router'
import { checkToken } from './js-functions/request/login'
import { provide, ref } from '@vue/runtime-core'

export default {
	name: 'App',
	components: {
		Navbar,
	},
	setup() {
		const current_user = ref(null)
		provide('user', current_user)
		provide('setUser', (user) => {
			current_user.value = user
		})
	},
	async mounted() {
		if (!this.user) {
			router.push('/login')
		} else {
			let success = await checkToken(cookies)
			if (!success) {
				this.user = null
			}
		}
	},
}
</script>

<style>
@import './App.css';
</style>
