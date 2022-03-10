<template>
	<search-box
		v-model="searchValue"
		:legendValue="'User'"
		@keyup.enter="fetchPlayerStats()"
	/>
	<div v-if="!this.loading"  class="loaded-container">
		<stats-list :stats="getStats" :userInfo="getUserInfo"/>
	</div>
	<div v-else class="loading-container">
		<spinner />
	</div>
</template>

<script>
import SearchBox from '../components/commandtable/SearchBox.vue'
import { getUserStats } from '../js-functions/gql/stats'
import Spinner from '../components/spinner/Spinner.vue'
import StatsList from '../components/statslist/StatsList.vue'
import { errorNotification } from '../js-functions/notification'

export default {
	components: {
		SearchBox,
		Spinner,
		StatsList
	},
	data() {
		return {
			searchValue: '',
			data: null,
			loading: false,
		}
	},
	methods: {
		async fetchPlayerStats() {
			this.loading = true
			let { success, data } = await getUserStats(this.searchValue)
			if (success) {
				this.data = data.user
			} else {
				errorNotification({
					title: 'Stats',
					text: `No data found for user "${this.searchValue}"`,
				})
			}
			this.loading = false
		},
	},
	computed: {
		getStats() {
			if (!this.data) return {}
			return this.data.stats
		},
		getUserInfo() {
			let object = {}
			if (this.data === null) return object

			for (let [key, value] of Object.entries(this.data)) {
				if (key !== 'stats') object[key] = value
			}

			return object
		},
	},
}
</script>

<style></style>
