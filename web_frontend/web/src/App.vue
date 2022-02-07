<template>
  <div id="nav">
    <ul>
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/login">Weather</router-link></li>
      <li><router-link class="link" to="/login">About</router-link></li>
      <li><router-link class="link" to="/login">Login</router-link></li>
    </ul>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
    @import './App.css';
</style>
