<template>
	<div class="table">
		<SearchBox v-model="search_value"></SearchBox>
		<table class="command-table" v-if="this.commands.length !== 0">
			<tr>
				<th class="clickable" @click="orderByKey('name')">Name</th>
				<th class="clickable" @click="orderByKey('counter')">Counter</th>
				<th>Description</th>
				<th class="clickable" @click="orderByKey('permissions')">
					Permissions
				</th>
				<th>Params (req)</th>
				<th>Params (opt)</th>
			</tr>
			<tr v-for="command of this.commands.values" :key="command.name">
				<td>{{ command.name.toLowerCase() }}</td>
				<td class="centered">{{ command.count }}</td>
				<td>{{ command.description }}</td>
				<td class="centered">{{ command.required_permissions }}</td>
				<td>{{ command.required_parameters.join(' ') }}</td>
				<td>{{ command.optional_parameters.join(' ') }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import { getCommands } from '../../js-functions/gql/commands'
import { orderBy } from '../../js-functions/order'
import SearchBox from '../commandtable/SearchBox.vue'

export default {
	name: 'CommandTable',
	components: {
		SearchBox,
	},
	data() {
		return {
			commands: {
				orderedBy: {
					coloumn: undefined,
					orderAsc: undefined,
				},
				values: [],
			},
			search_value: '',
		}
	},
	async mounted() {
		let name = 'name'
		this.commands.values = await getCommands()
		this.commands.orderedBy.orderAsc = true
		this.commands.orderedBy.coloumn = name
		orderBy(name, this.commands)
	},
	methods: {
		orderByKey(key) {
			this.commands = orderBy(key, this.commands)
		},
	},
}
</script>

<style>
@import './CommandTable.css';
</style>
