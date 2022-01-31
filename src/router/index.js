import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main";
import PostsPage from "@/views/PostsPage";
import PostIdPage from "@/views/PostIdPage";
import PostsPageWithStore from "@/views/PostsPageWithStore";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/posts",
    name: "PostsPage",
    component: PostsPage,
  },
  {
    path: "/store",
    name: "PostsPageWithStore",
    component: PostsPageWithStore,
  },
  {
    path: "/posts/:id",
    name: "PostIdPage",
    component: PostIdPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
