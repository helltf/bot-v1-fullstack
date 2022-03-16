<template>
	<div class="list-content" v-if="this.items">
		<div class="info-list" v-for="(value, name) in this.items" :key="name">
			<fieldset class="info-fieldset">
				<legend class="info-legend">{{ name }}</legend>
				<span class="info-value">{{ value }}</span>
			</fieldset>
			<!-- <span class="info-name">{{ name }}</span> -->
		</div>
	</div>
	<div v-else class="list-empty-container">
		<span class="list-empty">No Record found</span>
	</div>
</template>

<script>
export default {
	props: {
		items: Object,
	},
}
</script>

<style>
@import './InfoList.css';
</style>
