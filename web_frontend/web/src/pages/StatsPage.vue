<template>
	<search-box
		v-model="searchValue"
		:legendValue="'User'"
		@keyup.enter="openStatsPage()"
	/>
	<div v-if="this.setUser !== ''">
		<stats-list :userInput="this.setUser" />
	</div>
</template>

<script>
import SearchBox from '../components/commandtable/SearchBox.vue'
import StatsList from '../components/statslist/StatsList.vue'
import router from '../router'

export default {
	components: {
		SearchBox,
		StatsList,
	},
	data() {
		return {
			searchValue: '',
			setUser: '',
		}
	},
	methods: {
		openStatsPage() {
			router.push('/stats/' + this.searchValue)
		},
		getUserRouteParam(){
			return this.$route.params.user ? this.$route.params.user : ''
		}
	},
	updated() {
		if (this.getUserRouteParam() !== undefined) {
			this.setUser = this.getUserRouteParam()
		}
	},
	mounted(){
		this.setUser = this.getUserRouteParam()
	}

}
</script>

<style></style>
