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
            oldUser: '',
            loading = false
		}
	},
	props: {
		title: String,
		field: String,
		newUser: String,
	},

	methods: {
		async updateStats() {
            this.loading = true
			let { data, success } =
				this.field === 'user_info'
					? await fetchUserInfo(this.newUser)
					: await fetchStatsField(this.newUser, this.field)
			if (success) {
				this.data = data.user
			} else {
				this.data = undefined
				if (this.field === 'user_info') {
					errorNotification({
						title: 'Stats Card',
						text: `No stats found for input ${this.newUser}`,
					})
				}
			}
            this.loading = false
		},
	},
    async mounted(){
        await this.updateStats()
        this.oldUser === this.newUser
    },
    updated(){
        if (this.oldUser !== this.newUser){
            this.updateStats()
        }
    }
}
</script>

<style></style>
