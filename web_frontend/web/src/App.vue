<template>
	<Navbar />
	<router-view />

	<notifications
		classes="vue-notification notification-bar"
		position="center bottom"
		width="50%"
	/>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import { provide, ref } from '@vue/runtime-core'

export default {
	name: 'App',
	components: {
		Navbar,
	},
	setup() {
		const current_user = ref(undefined)
		provide('user', current_user)
		provide('setUser', (user) => {
			current_user.value = user
		})
	}
}

</script>

<style>
@import './App.css';
</style>
