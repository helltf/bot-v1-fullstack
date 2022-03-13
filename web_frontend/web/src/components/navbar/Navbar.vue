<template>
	<div id="nav">
		<div class="nav-wrapper">
			<div class="nav-begin nav-list">
				<router-link class="link" to="/">Home</router-link>
				<router-link class="link" to="/commands">Commands</router-link>
				<router-link class="link" to="/stats">Stats</router-link>
			</div>

			<div class="nav-end nav-list">
				<router-link class="link" id="link-about" to="/about"
					>About</router-link
				>
				<router-link
					class="link"
					to="/user-info"
					v-if="this.current_user !== undefined"
					>{{ this.current_user }}</router-link
				>
				<router-link class="link" to="/logout" v-if="this.current_user"
					>Logout</router-link
				>

				<router-link v-else class="link" to="/login">Login</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { inject } from '@vue/runtime-core'
import router from '../../router'
import {
	getUserAccessToken,
	getUsername,
} from '../../js-functions/request/twitch-login'

export default {
	name: 'Navbar',
	inject: ['access_token'],
	setup() {
		return {
			current_user: inject('user'),
			setUser: inject('setUser'),
		}
	},
	async mounted() {
		this.access_token.token = getUserAccessToken(document.location.hash)

		if (this.access_token.token) {
			const current_user = await getUsername(this.access_token.token)
			this.setUser(current_user)
		}
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
