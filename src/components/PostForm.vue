<template>
  <div @submit.prevent >
    <h4>Создание пост</h4>
    <!--    <input v-bind:value="post.title" @input="post.title = $event.target.value" class="input" type="text"-->
    <!--           placeholder="Название">-->
    <!--    <input v-model="post.body" class="input" type="text" placeholder="Описание">-->
    <my-input v-focus v-model="post.title" type="text" placeholder="Название" />
    <my-input v-model="post.body" type="text" placeholder="Описание" />
    <my-button @click="createPost">Создать</my-button>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        id: "",
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
