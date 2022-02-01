import axios from "axios";
import { onMounted, ref } from "vue";

export function usePosts(limit, page) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostsLoading = ref(true);
  const fetching = async () => {
    try {
      const responce = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: page,
            _limit: limit,
          },
        }
      );
      totalPages.value = Math.ceil(responce.headers["x-total-count"] / limit);
      posts.value = responce.data;
    } catch (e) {
      alert("error");
    } finally {
      isPostsLoading.value = false;
    }
  };

  onMounted(fetching);
  return {
    posts,
    totalPages,
    isPostsLoading,
  };

  // onCreated()
  // computed()
  // watch()
  //     ...
}
