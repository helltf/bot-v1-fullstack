<template>
	<div class="list-content" v-if="this.items">
		<div class="info-list" v-for="(value, name) in getItems" :key="name">
			<fieldset class="info-fieldset">
				<legend class="info-legend">{{ name }}</legend>
				<color-display :color="value" v-if="hasColor(name)" />
				<span v-else class="info-value">{{ value }}</span>
			</fieldset>
		</div>
	</div>
	<div v-else class="list-empty-container">
		<span class="list-empty">No Record found</span>
	</div>
</template>

<script>
import { mapItems } from '../../js-functions/stats-mapper'
import ColorDisplay from '../colordisplay/ColorDisplay.vue'

export default {
	components: {
		ColorDisplay,
	},
	props: {
		items: Object,
	},
	computed: {
		getItems() {
			return mapItems(this.items)
		},
	},
	methods: {
		hasColor(value) {
			return value === 'color' || value === 'history'
		},
	},
}
</script>

<style>
@import './InfoList.css';
</style>
