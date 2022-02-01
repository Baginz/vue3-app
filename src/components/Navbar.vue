<template>
  <div class="navbar">
    <div class="navbar__btns">
      <my-button @click="$router.push('/')">Main</my-button>
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/store')">PostsStore</my-button>
      <my-button @click="$router.push('/composition')"
        >PostsCompositionAPI</my-button
      >
      <my-button @click="$router.push('/about')">About</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
.navbar {
  min-height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
