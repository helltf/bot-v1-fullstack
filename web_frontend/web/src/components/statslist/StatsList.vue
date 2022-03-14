<template>
	<div v-if="this.loading" class="loading-container">
		<spinner />
	</div>
	<div v-else>
		<stats-card
			:field="'user_info'"
			:title="'User info'"
			:newUser="this.userInput"
		/>
		<stats-card
			:title="title"
			:field="field"
			:newUser="this.userInput"
			v-for="[title, field] of this.statsFields"
			:key="field"
		/>
	</div>
</template>

<script>
import StatsCard from '../statslist/StatsCard.vue'
import Spinner from '../spinner/Spinner.vue'

const statsFields = new Map([
	['Recent Colors', 'color_history'],
	['Cookie stats', 'cookie'],
	['Rps games', 'rps'],
	['Recieved timeouts', 'timeout'],
	['Recieved bans', 'ban'],
])

export default {
	name: 'StatsList',
	components: {
		Spinner,
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
