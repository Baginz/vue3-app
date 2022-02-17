<template>
  <input
      :value="modelValue"
      class="input"
      type="text"
      @input="updateInput"/>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 2px solid blue;
  padding: 10px;
  margin-top: 15px;
}
</style>
