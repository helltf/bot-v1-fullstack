<template>
	<div :key="this.user" class="stats-card" v-if="this.user !== undefined">
		<div class="stats-card-top">
			<span class="stats-card-title">{{ this.title }}</span>
		</div>
		<div class="card-content">
			<info-list v-if="!this.loading" :items="this.data" />

			<spinner v-else />
		</div>
	</div>
</template>

<script>
import { fetchUserInfo, fetchStatsField } from '../../js-functions/gql/stats'
import InfoList from '../../components/infolist/InfoList.vue'
import { errorNotification } from '../../js-functions/notification'
import Spinner from '../spinner/Spinner.vue'

export default {
	name: 'StatsCard',
	components: {
		InfoList,
		Spinner,
	},
	data() {
		return {
			data: undefined,
			oldUser: '',
			loading: false,
		}
	},
	props: {
		title: String,
		field: String,
		user: String,
	},

	methods: {
		async updateStats() {
			this.loading = true
			let { data, success } =
				this.field === 'user_info'
					? await fetchUserInfo(this.user)
					: await fetchStatsField(this.user, this.field)

			if (success) {
				this.data = handleValue(data, this.field)
			} else {
				if (this.field === 'user_info') {
					errorNotification({
						title: 'Stats Card',
						text: `No stats found for input ${this.user}`,
					})
				}
			}
			this.oldUser = this.user
			this.loading = false
		},
	},
	async mounted() {
		await this.updateStats()
	},
	updated() {
		if (this.oldUser !== this.user) {
			this.data = undefined
			this.updateStats()
		}
	},
}

function handleValue(data, field) {
	return data.user?.stats === undefined ? data.user : data.user.stats[field]
}
</script>

<style>
	@import './StatsCard.css'
</style>
