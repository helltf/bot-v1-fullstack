<template>
	<info-card :title="'User info'" :data="this.userInfo" />
	<info-card
		:data="value"
		:title="name"
		v-for="(value, name) in this.stats"
		:key="name"
	/>
</template>

<script>
import InfoCard from '../infocard/InfoCard.vue'

export default {
	name: 'StatsList',
	components: {
		InfoCard,
	},
    props:{
        stats: Object,
        userInfo: Object
    }
}
</script>

<style></style>
