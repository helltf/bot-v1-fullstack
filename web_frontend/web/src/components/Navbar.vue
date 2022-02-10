<template>
    <div id="nav">
      <div class="nav-wrapper">
    <ul class="nav-list">
      <li class="link"><router-link id="link-home"  to="/">Home</router-link></li>
      <li class="link"><router-link id="link-weather" to="/weather">Weather</router-link></li>
      <li class="link"><router-link id="link-about" to="/about">About</router-link></li>
      <li class="link"><router-link id="link-login"  to="/login">Login</router-link></li>
    </ul>
      </div>

  </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style>
    @import './Navbar.css';
</style>