<template>
	<div class="command-input">
		<fieldset class="search-fieldset">
			<legend>Search</legend>
			<form class="search-form">
				<input
					class="search-input"
					id="search"
					type="text"
					placeholder=""
                    autocomplete="off"
					:value="modelValue"
					@input="$emit('update:modelValue', $event.target.value)"
				/>
                <img class="search-img" src="../../assets/search.svg" alt="search">
			</form>
		</fieldset>
	</div>
</template>

<script>
export default {
	name: 'SearchBox',
	props: {
		modelValue: String,
	},
}
</script>

<style>
@import './SearchBox.css';
</style>
