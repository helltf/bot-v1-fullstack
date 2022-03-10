<template>
	<search-box
		v-model="searchValue"
		:legendValue="'User'"
		@keyup.enter="fetchPlayerStats()"
	/>
	<div v-if="!this.loading && !this.errorMessage" class="loaded-container">
		<info-card :title="'User info'" :data="getUserItems" />
		<info-card
			:data="value"
			:title="name"
			v-for="(value, name) in getStats"
			:key="name"
		/>
	</div>
	<div v-else-if="this.loading" class="loading-container">
		<spinner />
	</div>
	<div v-else-if="this.errorMessage">
		<h1>{{ errorMessage }}</h1>
	</div>
</template>

<script>
import SearchBox from '../components/commandtable/SearchBox.vue'
import { getUserStats } from '../js-functions/gql/stats'
import InfoCard from '../components/infocard/InfoCard.vue'
import Spinner from '../components/spinner/Spinner.vue'
import { errorNotification } from '../js-functions/notification'

export default {
	components: {
		SearchBox,
		InfoCard,
		Spinner,
	},
	data() {
		return {
			searchValue: '',
			errorMessage: '',
			data: null,
			loading: false,
		}
	},
	methods: {
		async fetchPlayerStats() {
			this.loading = true
			let { success, data } = await getUserStats(this.searchValue)

			if (success) {
				this.errorMessage = ''
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
		getUserItems() {
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
