import { createApp } from "vue";
import App from "./App.vue";
import directives from "@/directives";
import components from "@/components/UI";
import router from "./router";
import store from "./store";

// createApp(App).use(store).use(router).mount("#app");

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(store).use(router).mount("#app");
