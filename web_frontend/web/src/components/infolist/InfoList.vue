<template>
	<div class="list-content">
		<ul class="info-list" v-for="(value, name) in this.items" :key="name">
			<li>{{ value }} {{ name }}</li>
		</ul>
	</div>
	<div class="list-no-content" v-if="!this.items">
		<span class="list-empty" >No Record found</span>
	</div>
</template>

<script>
export default {
	props: {
		items: Object,
	}
}
</script>

<style>
@import './InfoList.css';
</style>
