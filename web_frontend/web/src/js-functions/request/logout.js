import {TOKEN, SIGNED_IN} from './login'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const deleteCookies = () =>{
    cookies.remove(SIGNED_IN)
    cookies.remove(TOKEN)
}

export{deleteCookies}