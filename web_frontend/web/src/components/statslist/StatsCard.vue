<template>
	<info-card
		v-if="this.data !== undefined"
		:data="this.data"
		:title="this.title"
	/>
</template>

<script>
import { fetchUserInfo, fetchStatsField } from '../../js-functions/gql/stats'
import InfoCard from '../../components/infocard/InfoCard.vue'
import { errorNotification } from '../../js-functions/notification'

export default {
	name: 'StatsCard',
	components: {
		InfoCard,
	},
	data() {
		return {
			data: undefined,
		}
	},
	props: {
		title: String,
		field: String,
		user: String,
	},
	async mounted() {
		let { data, success } =
			this.field === 'user_info'
				? await fetchUserInfo(this.user)
				: await fetchStatsField(this.user, this.field)
		if (success) {
			this.data = data.user
		} else {
			errorNotification({ title: 'Stats Card', text: 'Not Found' })
		}
	},
}
</script>

<style></style>
