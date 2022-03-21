<template>
	<nav id="nav">
		<div class="nav-container">
			<ul class="nav-list nav-left">
				<li class="link">
					<router-link class="link-item" to="/">Home</router-link>
				</li>
				<li class="link">
					<router-link class="link-item" to="/commands">Commands</router-link>
				</li>
				<li class="link">
					<router-link class="link-item" to="/stats">Stats</router-link>
				</li>
			</ul>
			<ul class="nav-list nav-right">
				<li class="link" v-if="userDefined">
					<router-link class="link-item" to="/logout">Logout</router-link>
				</li>
				<li class="link" v-if="userDefined">
					<router-link class="link-item" to="/user-info">{{
						this.current_user
					}}</router-link>
				</li>

				<li class="link">
					<router-link v-if="!userDefined" class="link-item" to="/login"
						>Login</router-link
					>
				</li>
			</ul>

			<a v-if="userDefined" :href="`https://twitch.tv/${this.current_user}`">
				<img class="img-pfp" :src="getImageSrc" alt="" />
			</a>
			<button class="activate-mobile " v-if="showButton">
				III
			</button>
		</div>
	</nav>
</template>

<script>
import { inject } from '@vue/runtime-core'
import router from '../../router'
import {
	getUserAccessToken,
	getUsername,
	getProfiPictureUrl,
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
			width: window.innerWidth
		}
	},
	async mounted() {
		
		const token = getUserAccessToken(document.location.hash)
		this.access_token = token

		if (token) {
			const current_user = await getUsername(token)
			this.image_source = await getProfiPictureUrl(token)
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
			return this.image_source
		},
		userDefined() {
			return this.current_user
		},
		showButton(){
			return this.width <= 920
		}
	},
	beforeMount(){
		window.addEventListener('resize', () => {this.width = window.innerWidth})
	}
}
</script>

<style>
@import './Navbar.css';
</style>
