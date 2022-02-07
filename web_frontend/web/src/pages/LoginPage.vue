<template>
  <div class = "login_component">
    <LoginField ></LoginField>
  </div>
</template>

<script>
import LoginField from '../components/LoginField.vue' 

export default {
  name: 'LoginPage',
  components: {
    LoginField
  }
}
</script>
<style>
   @import './LoginPage.css';
</style>