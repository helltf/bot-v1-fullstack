<template>
  <ul class="item-list" v-for="(value, name) in this.items" :key="name">
      <li>{{value}} {{name}}</li>
  </ul>
</template>

<script>
export default {
    props:{
        items: Object
    }
}
</script>

<style>

</style>