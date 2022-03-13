<template>
	<LoginField></LoginField>
</template>

<script>
import LoginField from '../components/loginfield/LoginField.vue'
import router from '../router'
import { inject } from '@vue/runtime-core'

export default {
	name: 'LoginPage',
	components: {
		LoginField,
	},
	setup() {
		return {
			current_user: inject('user'),
			setUser: inject('setUser'),
		}
	},
	mounted() {
		if (this.current_user !== undefined) {
			router.push('/')
		}
	},
}
</script>
<style></style>
