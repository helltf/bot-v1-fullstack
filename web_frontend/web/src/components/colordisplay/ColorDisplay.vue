<template>
	<div :key="color" v-for="color of getColors">
		<div
			:style="this.colorStyle(color)"
			class="color-display"
			@click="copyValue(color)"
		>
			
		</div>
		<span class="color-info">{{ color }}</span>
	</div>
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
		copyValue(color) {
			navigator.clipboard.writeText(color)
		},
	},
}
</script>

<style>
@import './ColorDisplay.css';
</style>
