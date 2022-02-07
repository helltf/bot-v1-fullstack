<template>
  <div class="login-box">
      <h1 >LOGIN</h1>
      <div class="form-wrapper">
      <form class="login-form" @keyup.enter="submit(username, password)" >
        <input  type="text" required v-model="username" placeholder="Enter email">
        <input type="password" required v-model="password" placeholder="Password" >
      </form>
      <button class="submit-btn" @click="submit(username, password)">Submit</button>
      </div>
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
    submit: async(username, password) =>{
      let {success} = await postData(username,password)
      if(success){
        router.push("Home")
      }
    }
  }
}

async function postData(username, password) {
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