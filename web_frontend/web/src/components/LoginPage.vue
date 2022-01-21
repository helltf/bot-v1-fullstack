<template>
  <div class = "login_component">
    <LoginField ></LoginField>
  </div>
</template>

<script>
import LoginField from './LoginField.vue' 

export default {
  name: 'App',
  components: {
    LoginField
  }
}
</script>
<style>
   @import './LoginPage.css';
</style>