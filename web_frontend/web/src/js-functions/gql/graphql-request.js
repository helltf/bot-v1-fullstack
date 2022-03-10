import { request } from 'graphql-request'
import { Resource } from '../class/Resource'

const gqlRequest = async (path, query) => {
    try{
        return Resource.ok(await request(path, query))
    }catch(e){
        return Resource.error(`Data could not be fetched`)
    }
}

export {gqlRequest as request}