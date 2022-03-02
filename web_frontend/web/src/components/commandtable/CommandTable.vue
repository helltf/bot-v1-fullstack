<template>
	<table class="command-table">
		<tr>
			<th @click="orderByKey('name')">Name</th>
			<th @click="orderByKey('counter')">Counter</th>
			<th >Description</th>
			<th @click="orderByKey('permissions')">Required permissions</th>
			<th >Params (req)</th>
			<th >Params (opt)</th>
		</tr>
		<tr v-for="command of this.commands" :key="command.name">
			<th>{{ command.name.toLowerCase() }}</th>
			<th>{{ command.count }}</th>
			<th>{{ command.description }}</th>
			<th>{{ command.required_permissions }}</th>
			<th>{{ command.required_parameters.join(' ') }}</th>
			<th>{{ command.optional_parameters.join(' ') }}</th>
		</tr>
	</table>
</template>

<script>
import { getCommands } from '../../js-functions/gql/commands'
import {orderBy} from '../../js-functions/order'
export default {
	name: 'CommandTable',
	data() {
		return {
			commands: [],
		}
	},
	async mounted() {
		this.commands = await getCommands()
	},
	methods: {
		orderByKey(key) {
      orderBy(key, this.commands)
		},
	},
}
</script>

<style></style>
