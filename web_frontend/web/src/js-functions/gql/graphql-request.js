import { request } from 'graphql-request'
import { Resource } from '../class/Resource'

const gqlRequest = async (path, query) => {
    try{
        return Resource.ok(await request(path, query))
    }catch(e){
        return Resource.error(`Could not fetch endpoint: ${path}`)
    }
}

export {gqlRequest as request}