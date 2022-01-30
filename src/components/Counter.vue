<template>
  <button @click="addLike"></button>
  <button @click="addDislike"></button>
  <div>{{ likes }}</div>
  <div>{{ dislikes }}</div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 3,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
  },
};
</script>
