<template>
  <Navbar/>
  <router-view />
</template>

<script>

import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import Navbar from './components/Navbar.vue'
import router from './router'
 
export default {
  name: 'App',
  components:{
    Navbar
  },
  mounted(){
    this.user_login = cookies.get("user_login") ? "" : cookies.get("user_login")
    if(this.user_login !== ""){
      router.push("/login")
    }
  },
  data(){
    return{
      user_login:''
    }
  }
  
}
</script>

<style>
    @import './App.css';
</style>
