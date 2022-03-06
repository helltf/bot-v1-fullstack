<template>
	<search-box
		v-model="searchValue"
		:legendValue="'User'"
		@keyup.enter="fetchPlayerStats()"
	/>
	<h1 v-if="this.errorMessage">{{ errorMessage }}</h1>
</template>

<script>
import SearchBox from '../components/commandtable/SearchBox.vue'
import { getUserStats } from '../js-functions/gql/stats'

export default {
	components: {
		SearchBox,
	},
	data() {
		return {
			searchValue: '',
			errorMessage: '',
		}
	},
	methods: {
		async fetchPlayerStats() {
			let { success, error, data } = await getUserStats(this.searchValue)
			console.log(success, error, data)
			if (success) {
				this.errorMessage = ''
                
			} else {
				this.errorMessage = "Cannot fetch user for given input"
			}
		},
	},
}
</script>

<style></style>
