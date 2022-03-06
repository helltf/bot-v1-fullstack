<template>
	<search-box
		v-model="searchValue"
		:legendValue="'User'"
		@keyup.enter="fetchPlayerStats()"
	/>
	<div v-if="!this.loading" class="loaded-container">
		<h1 v-if="this.errorMessage">{{ errorMessage }}</h1>
		<item-list :items="getUserItems" />
        <item-list :items="value" v-for="(value, name) in getStats" :key="name"/>
	</div>
	<div v-else>
		<h1>Loading</h1>
	</div>
</template>

<script>
import SearchBox from '../components/commandtable/SearchBox.vue'
import { getUserStats } from '../js-functions/gql/stats'
import ItemList from '../components/infolist/InfoList.vue'
export default {
	components: {
		SearchBox,
		ItemList,
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
				this.errorMessage = 'Cannot fetch user for given input'
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
