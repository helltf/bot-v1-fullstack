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
