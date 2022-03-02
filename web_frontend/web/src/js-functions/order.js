const orderFunctions = {
	name: (list) => {
		list.sort((a, b) => a.name.localeCompare(b.name))
	},
	counter: (list) => {
		list.sort((a, b) => a.count - b.count)
	},
	permissions: (list) => {
		list.sort((a, b) => a.required_permissions - b.required_permissions)
	},
}

const orderBy = (key, list) => {
	orderFunctions[key](list)
}

export { orderBy }
