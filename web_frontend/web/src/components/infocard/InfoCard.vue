<template>
	<div class="item-card">
		<h1>{{ title }}</h1>
		<info-list :items="data" />
	</div>
</template>

<script>
import InfoList from '../infolist/InfoList.vue'

export default {
	name: 'InfoCard',
	props: {
		data: Object,
		title: String,
	},
	components: {
		InfoList,
	},
	mounted() {
		console.log(this.data)
	},
}
</script>

<style></style>
