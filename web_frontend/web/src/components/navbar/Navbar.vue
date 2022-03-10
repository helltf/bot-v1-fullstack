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
import { SIGNED_IN } from '../../js-functions/request/login'
import router from '../../router'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import {validateToken} from '../../js-functions/request/twitch-request'
import {errorNotification} from '../../js-functions/notification'

export default {
	name: 'Navbar',
	inject:['access_token'],
	setup() {
		return {
			current_user: inject('user'),
			setUser: inject('setUser'),
		}
	},
	async mounted() {
		this.setUser(cookies.get(SIGNED_IN))
		this.access_token = getUserAccessToken(document.location.hash)
		this.setUser(await getUsername(this.access_token))
	},
	methods: {
		async logout() {
			router.push('/logout')
		},
	},
}

function getUserAccessToken(input) {
	if(!input.startsWith("#/access_token=")){
		return undefined
	}else{
		return getAccessTokenFromInput(input)
	}
}

function getAccessTokenFromInput(input){
	return input.slice(2).split('&')[0].split('=')[1]
}
async function getUsername(access_token){
	if(!access_token) return undefined
	const {data, success, error} = await validateToken(access_token)
	if(success){
		return data.login
	}else{
		errorNotification('Twitch', error)
	}
}

</script>

<style>
@import './Navbar.css';
</style>
