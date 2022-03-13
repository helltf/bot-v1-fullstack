<template>
	<search-box
		v-model="searchValue"
		:legendValue="'User'"
		@keyup.enter="setUserInput()"
	/>
	<div v-if="this.loading" class="loading-container">
		<spinner />
	</div>
	<div v-else-if="!this.loading && this.setUser" class="loaded-container">
		<stats-list :stats="getStats" :userInfo="getUserInfo" />
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
		StatsList,
	},
	data() {
		return {
			searchValue: '',
			data: null,
			loading: false,
			setUser: undefined,
		}
	},
	methods: {
		setUserInput() {
			this.setUser = this.searchValue
			this.fetchPlayerStats()
		},
		
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
			if (this.data === null) return {}

			let object = {
				...this.data,
			}

			delete object.stats

			return object
		},
	},
}
</script>

<style></style>
