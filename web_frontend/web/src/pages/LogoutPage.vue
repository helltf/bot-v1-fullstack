<template>
	<h1>Logout</h1>
</template>

<script>
import { inject } from '@vue/runtime-core'
import {deleteCookies} from '../js-functions/request/logout'
import router from '../router'

export default {
	name: 'LogoutPage',
	setup() {
		return {
			current_user: inject('user'),
			setUser: inject('setUser'),
		}
	},
	mounted() {
        deleteCookies()
		this.setUser(undefined)
        router.push('/')
	}
}
</script>

<style></style>
