<template>
	<search-box
		v-model="searchValue"
		:legendValue="'User'"
		@keyup.enter="setUserInput()"
	/>
	<div v-if="!this.loading && this.setUser" class="loaded-container">
		<stats-list :userInput="this.setUser"/>
	</div>
</template>

<script>
import SearchBox from '../components/commandtable/SearchBox.vue'
import StatsList from '../components/statslist/StatsList.vue'

export default {
	components: {
		SearchBox,
		StatsList,
	},
	data() {
		return {
			searchValue: '',
			loading: false,
			setUser: '',
		}
	},
	methods: {
		setUserInput() {
			this.setUser = this.searchValue
		},
	}
}
</script>

<style></style>
