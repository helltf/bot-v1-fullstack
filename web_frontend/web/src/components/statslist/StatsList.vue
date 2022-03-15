<template>
	<div class="stats-list">
		<stats-card
			:field="'user_info'"
			:title="'User info'"
			:user="this.userInput"
		/>
		<stats-card
			:title="title"
			:field="field"
			:user="this.userInput"
			v-for="[title, field] of this.statsFields"
			:key="field"
		/>
	</div>
</template>

<script>
import StatsCard from '../statslist/StatsCard.vue'

const statsFields = new Map([
	['Recent Colors', 'color_history'],
	['Cookie stats', 'cookie'],
	['Rps games', 'rps'],
	['Received timeouts', 'timeout'],
	['Received bans', 'ban'],
])

export default {
	name: 'StatsList',
	components: {
		StatsCard,
	},
	props: {
		userInput: String,
	},
	data() {
		return {
			loading: false,
			statsFields: statsFields,
		}
	}
}
</script>

<style></style>
