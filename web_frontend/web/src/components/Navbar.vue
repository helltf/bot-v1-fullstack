<template>
	<div id="nav">
		<div class="nav-wrapper">
			<div class="nav-begin nav-list">
				<router-link class="link" to="/">Home</router-link>
				<router-link class="link" to="/commands">Commands</router-link>
				<router-link class="link" to="/weather">Weather</router-link>
			</div>

			<div class="nav-end nav-list">
				<router-link class="link" id="link-about" to="/about"
					>About</router-link
				>
				<router-link
					class="link"
					to="/user-info"
					v-if="this.current_user !== null"
					>{{ this.current_user }}</router-link
				>
				<router-link class="link" to="/logout" v-if="this.current_user !== null"
					>Logout</router-link
				>

				<router-link class="link" to="/login" v-if="this.current_user === null"
					>Login</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import { inject } from '@vue/runtime-core'
import { SIGNED_IN } from '../request/login'
import router from '../router'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default {
	name: 'Navbar',
	setup() {
		return {
			current_user: inject('user'),
			setUser: inject('setUser'),
		}
	},
	mounted() {
		this.setUser(cookies.get(SIGNED_IN))
	},
	methods: {
		async logout() {
			router.push('/logout')
		},
	},
}
</script>

<style>
@import './Navbar.css';
</style>
