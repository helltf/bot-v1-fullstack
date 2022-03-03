const orderFunctions = {
	name: (list) => {
		return list.sort((a, b) => a.name.localeCompare(b.name))
	},
	counter: (list) => {
		return list.sort((a, b) => a.count - b.count)
	},
	permissions: (list) => {
		return list.sort((a, b) => a.required_permissions - b.required_permissions)
	},
}

const orderBy = (coloumn,  {values, orderedBy:{orderAsc}}) => {
	let ordered_list = orderFunctions[coloumn](values)
	orderAsc = !orderAsc

	if(!orderAsc){
		ordered_list.reverse()
	}

	return {
		orderedBy:{
			coloumn,
			orderAsc
		},
		values: ordered_list
	}
}

export { orderBy }
