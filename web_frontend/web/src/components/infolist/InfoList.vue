<template>
	<div class="list-content" v-if="this.items">
		<ul class="info-list" v-for="(value, name) in this.items" :key="name">
			<li>
				<span class="info-name" >{{ name }}</span>
				<span class="info-value" >{{ value }}</span>
			</li>
		</ul>
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
