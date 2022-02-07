<template>
  <div class="login_box">
      <h1 class="login_text">LOGIN</h1>
      <div class = input_username_password>
        <InputField :value="data().password"/>

      </div>
     <button v-on:click= "onClick(data().password)" class="btn_login" type="button" >Log in</button>
  </div>
</template>

<script>
import InputField from './InputField.vue' 

export default {
  name: 'LoginField',
  components:{
    InputField
  },
  methods:{
    onClick (password) {
      console.log(password)
    },
     data: function(){
       return {
         password: "sads",
         user:"hello"
       }
     }
  }
}
</script>
<style>
  @import './LoginField.css';
</style>