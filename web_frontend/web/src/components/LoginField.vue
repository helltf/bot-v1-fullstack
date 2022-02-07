<template>
  <div class="login_box">
      <h1 class="login_text">LOGIN</h1>
      <form >
        <label >Username</label>
        <input type="text" required v-model="username">

         <label >Password</label>
        <input type="password" required v-model="password">
      </form>
      <button @click="onButtonClick(username, password)"></button>
  </div>
</template>

<script>
require('dotenv').config()
import router from '../router'
export default {
  name: 'LoginField',
  data(){
    return{
      username:'',
      password:'',
      url: process.env.VUE_APP_URL, 
    }
  },
  methods:{
    onButtonClick: async(username, password) =>{
      let {success} = await postData(username,password)
      if(success){
        router.push("Home")
      }
    }
  }
}

async function postData(username, password) {
  console.log(username,password)
  return await (
    await fetch(
      `${process.env.VUE_APP_BASE_PATH}/login`,
      {
      method:'post',
      headers:{
        'content-type':'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      }
      )
      ).json()
}
</script>
<style>
  @import './LoginField.css';
</style>