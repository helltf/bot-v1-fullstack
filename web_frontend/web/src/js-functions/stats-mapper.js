import {titleReplacements} from './constants/stats-constants'

const mapTitle = (title) => {
    return titleReplacements[title] ? titleReplacements[title] : title
}

const mapValue = (value) => {
    if(typeof value !== 'string') return value
    const match = value.match(/\d{4}-\d{2}-\d{2}/gmi)

    return match ? match[0] : value
}


const mapItems = (items) => {
    let mappedObject = {}

    if(!items) return mappedObject

    for(let [title, value] of Object.entries(items)){
        mappedObject[mapTitle(title)] = mapValue(value)
    }

    return mappedObject
}


export{
    mapItems
}