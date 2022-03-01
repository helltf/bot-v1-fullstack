<template>
	<div id="nav">
		<div class="nav-wrapper">
			<div class="nav-begin nav-list">
				<router-link class="link" id="link-home" to="/">Home</router-link>
				<router-link class="link" id="link-home" to="/">Commands</router-link>
				<router-link class="link" id="link-weather" to="/weather"
					>Weather</router-link
				>
			</div>

			<div class="nav-end nav-list">
				<router-link class="link" id="link-about" to="/about"
					>About</router-link
				>
				<div class="dropdown-user" v-if="this.current_user !== null">
					<router-link class="link" id="link-user" to="/login">{{
						this.current_user
					}}</router-link>
					<div class="dropdown-user-content">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div>

				<router-link
					class="link"
					id="link-login"
					to="/login"
					v-if="this.current_user === null"
					>Login</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import { inject } from '@vue/runtime-core'
import { useCookies } from 'vue3-cookies'
import { SIGNED_IN } from '../request/login'
const { cookies } = useCookies()

export default {
	name: 'Navbar',
	setup(){
		return {
			current_user: inject('user'),
			setUser: inject('setUser')
		}
	},
	mounted(){
		this.setUser(cookies.get(SIGNED_IN))
	}
}
</script>

<style>
@import './Navbar.css';
</style>
