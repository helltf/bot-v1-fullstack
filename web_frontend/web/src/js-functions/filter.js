let regex 
const filter = (list, search) => {
    if(list.length === 0){
        return []
    }
    regex = new RegExp(search, "gmi")

    let result = list.filter( ({name, count, optional_parameters, required_parameters}) => {
        return matches(name) || matches(count) || matches(optional_parameters) || matches(required_parameters)
    })

    return result
}

const matches = (value) =>{
    return String(value).search(regex) !== -1
}
export{filter}