<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.btn {
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: blue;
  border: 1px solid blue;
}
</style>