<template>
  <div class="container">
    <h1>Посты</h1>
    <my-button @click="showDialog">
      Создать пост
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>

    <post-list :posts="posts" @remove="removePost"/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'title1', body: 'post1'},
        {id: 2, title: 'title2', body: 'post2'},
        {id: 3, title: 'title3', body: 'post3'},
        {id: 4, title: 'title4', body: 'post4'},
      ],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    }
  },
  async fetchPosts() {
    try {
      const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
      this.posts = responce.data;
    } catch (e) {
      alert('error')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  padding: 20px;
}
</style>
