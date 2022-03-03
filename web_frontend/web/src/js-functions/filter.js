const filter = (list, search) => {
    const regex = new RegExp(search, "gmi")
    let result = list.filter( ({name}) => name.search(regex) !== -1)
    return result
}

export{filter}