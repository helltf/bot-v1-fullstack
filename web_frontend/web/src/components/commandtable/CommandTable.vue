<template>
	<div v-if="!this.error_message" class="table">
		<SearchBox
			v-model="search_value"
			:legendValue="'Search'"
			:classValue="'command-input'"
		/>
		<table class="command-table" v-if="commandsExists">
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
			<tr v-for="command of filteredCommands" :key="command.name">
				<td>{{ command.name.toLowerCase() }}</td>
				<td class="centered">{{ command.count }}</td>
				<td>{{ command.description }}</td>
				<td class="centered">{{ command.required_permissions }}</td>
				<td>{{ command.required_parameters.join(' ') }}</td>
				<td>{{ command.optional_parameters.join(' ') }}</td>
			</tr>
		</table>
	</div>
	<div v-else>
		<h1>{{this.error_message}}</h1>
	</div>
</template>

<script>
import { getCommands } from '../../js-functions/gql/commands'
import { orderBy } from '../../js-functions/order'
import { filter } from '../../js-functions/filter'
import SearchBox from '../commandtable/SearchBox.vue'
import {errorNotification} from '../../js-functions/notification'

export default {
	name: 'CommandTable',
	components: {
		SearchBox,
	},
	data() {
		return {
			search_value: '',
			commands: {
				orderedBy: {
					coloumn: undefined,
					orderAsc: undefined,
				},
				values: [],
			},
		}
	},
	async mounted() {
		let name = 'name'
		const { data, error, success } = await getCommands()
		if (success) {
			this.commands.values = data.commands
			this.commands.orderedBy.orderAsc = true
			this.commands.orderedBy.coloumn = name
			orderBy(name, this.commands)
		}else{
			errorNotification({title:"Commands", text: error})
		}
	},
	methods: {
		orderByKey(key) {
			this.commands = orderBy(key, this.commands)
		},
	},

	computed: {
		commandsExists() {
			return this.commands.values.length !== 0
		},
		filteredCommands() {
			return filter(this.commands.values, this.search_value)
		},
	},
}
</script>

<style>
@import './CommandTable.css';
</style>