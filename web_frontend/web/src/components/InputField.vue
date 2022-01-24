<template>
<!-- 
      <div class="default_input">
        <input class="input_field" :value="v_model" v-bind:id="idname" v-bind:type="type"  v-bind:placeholder="placeholder" v-bind:maxlength="maxlength" >
    </div>
-->
<label>
    <input type="text" :label="label" :value="value" @input="updateValue($event.target.value)" />
  </label>
</template>

<script>
export default { 
  name: 'InputField',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods:{
    updateValue(value){
      this.$emit('input', value)
    }
  }
}

</script>

<style>
  @import './InputField.css';
</style>