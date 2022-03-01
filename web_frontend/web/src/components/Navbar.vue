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
				<router-link class="link" id="link-login" to="/login" v-if="!this.user.signed_in"
					>Login</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	inject:["user"]
}
</script>

<style>
@import './Navbar.css';
</style>
