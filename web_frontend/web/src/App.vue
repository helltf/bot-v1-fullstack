<template>
	<Navbar />
	<router-view />
</template>

<script>
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import Navbar from './components/Navbar.vue'
import router from './router'
import { checkToken } from './request/login'

export default {
	name: 'App',
	inject: ['user'],
	components: {
		Navbar,
	},
	async mounted() {
		this.user.signed_in = cookies.get('signed_in')
		if (!this.user.signed_in) {
			router.push('/login')
		} else {
			let success = await checkToken(cookies)
			if (!success) {
				this.user.signed_in = undefined
			}
		}
	},
}
</script>

<style>
@import './App.css';
</style>
