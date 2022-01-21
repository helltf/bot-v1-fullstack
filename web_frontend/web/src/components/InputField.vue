<template>
    <div class="default_input">
        <input id="input_field" v-bind:class="classname" v-bind:type="type"  v-bind:placeholder="placeholder" v-bind:maxlength="maxlength" >
    </div>
</template>

<script>
export default {
  name: 'InputField',
  props:{
      classname:String,
      type:String,
      placeholder:String,
      maxlenght:String
  }
}

</script>

<style>
  @import './InputField.css';
</style>