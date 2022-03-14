<template>
	<div v-if="this.data !== undefined">
		<h1>{{ this.title }}</h1>
		<info-list :items="this.data" />
	</div>
</template>

<script>
import { fetchUserInfo, fetchStatsField } from '../../js-functions/gql/stats'
import InfoList from '../../components/infolist/InfoList.vue'
import { errorNotification } from '../../js-functions/notification'

export default {
	name: 'StatsCard',
	components: {
		InfoList,
	},
	data() {
		return {
			data: undefined,
			oldUser: '',
		}
	},
	props: {
		title: String,
		field: String,
		newUser: String,
	},

	methods: {
		async updateStats() {
			let { data, success } =
				this.field === 'user_info'
					? await fetchUserInfo(this.newUser)
					: await fetchStatsField(this.newUser, this.field)

			if (success) {
				this.data = handleValue(data, this.field)
				if (this.field === 'user_info') {
					errorNotification({
						title: 'Stats Card',
						text: `No stats found for input ${this.newUser}`,
					})
				}
			}
			this.oldUser = this.newUser
		},
	},
	async mounted() {
		await this.updateStats()
	},
	updated() {
		if (this.oldUser !== this.newUser) {
			this.data = undefined
			this.updateStats()
		}
	},
}

function handleValue(data, field) {
	return data?.stats === undefined ? data.user : data.user.stats[field]
}

</script>

<style></style>
