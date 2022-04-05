<template>
	<div class="home">
		<div class="home-content">
			<welcome-container/>
			<h1>About myself</h1>
			<h1>My Projects</h1>
			<h1>My Social Media</h1>
		</div>
	</div>
</template>

<script>

import WelcomeContainer from './WelcomeContainer.vue'

export default {
    name: 'HomeContainer',
    components:{
        WelcomeContainer
    }
}
</script>

<style>
 @import './HomeContainer.css'
</style>
