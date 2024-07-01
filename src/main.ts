import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ButtonApp from "./components/ButtonApp.vue";
import InputApp from "./components/InputApp.vue";

import vFocus from "./directives/vFocus";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("button-app", ButtonApp);
app.component("input-app", InputApp);
app.directive("focus", vFocus);

app.mount("#app");
