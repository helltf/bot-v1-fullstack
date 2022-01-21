<template>
  <div class="login_box">
      <h1 class="login_text">LOGIN</h1>
      <div class = input_username_password>
         <InputField classname="input_username" type="text" placeholder="username..." maxlenght="30" />
        <InputField classname="input_password" type="password"   placeholder="password..." maxlenght="30" />
      </div>
     <button class="btn_login" type="button">Log in</button>
  </div>
</template>

<script>
import InputField from './InputField.vue' 

export default {
  name: 'LoginField',
  components:{
    InputField
  }
}
</script>
<style>
  @import './LoginField.css';
</style>