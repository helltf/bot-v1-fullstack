<template>
	<div
		:key="color"
		v-for="color of getColors"
		:style="this.colorStyle(color)"
		class="color-display"
	></div>
</template>

<script>
export default {
	name: 'ColorDisplay',
	props: ['color'],
	computed: {
		getColors() {
			if (typeof this.color === 'string') {
				return [this.color]
			} else {
				return [...this.color]
			}
		},
	},
	methods: {
		colorStyle(color) {
			return {
				'background-color': color,
			}
		},
	},
}
</script>

<style>
@import './ColorDisplay.css';
</style>
