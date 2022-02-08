<template>
    <div id="nav">
    <ul>
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/weather">Weather</router-link></li>
      <li><router-link class="link" to="/about">About</router-link></li>
      <li><router-link class="link" to="/login">Login</router-link></li>
    </ul>
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