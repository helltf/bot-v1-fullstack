<template>
	<ul id="nav" class="nav-list">
		<li class="link link-left">
			<router-link class="link-item" to="/">Home</router-link>
		</li>
		<li class="link link-left">
			<router-link class="link-item" to="/commands">Commands</router-link>
		</li>
		<li class="link link-left">
			<router-link class="link-item" to="/stats">Stats</router-link>
		</li>
		<li class="link link-right" v-if="userDefined">
			<router-link class="link-item" to="/logout">Logout</router-link>
		</li>
		<li class="image-link" v-if="userDefined">
			<a :href="`https://twitch.tv/${this.current_user}`">
				<img class="img-pfp" :src="getImageSrc" alt="" />
			</a>
		</li>
		<li class="link link-right" v-if="userDefined">
			<router-link class="link-item" to="/user-info">{{
				this.current_user
			}}</router-link>
		</li>

		<li class="link link-right">
			<router-link v-if="!userDefined" class="link-item" to="/login"
				>Login</router-link
			>
		</li>
	</ul>
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
	data() {
		return {
			image_source: undefined,
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
	computed: {
		getImageSrc() {
			return 'https://static-cdn.jtvnw.net/jtv_user_pictures/7ebab2a7-235f-48b3-9b78-a23c24f3d426-profile_image-300x300.png'
		},
		userDefined() {
			return this.current_user
		},
	},
}
</script>

<style>
@import './Navbar.css';
</style>
