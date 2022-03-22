<template>
  <div class = "home">
    <div class="home-content">
    <h1>Welcome to my webpage</h1>
    <h1>About myself</h1>
    <h1>My Projects</h1>
    <h1>My Social Media</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    
  }
}
</script>
<style>
  .home-content{
    background: var(--default-background);
    height: 100%;
    width: 70%;
  }
  .home{
    display: flex;
    justify-content: center;
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>


