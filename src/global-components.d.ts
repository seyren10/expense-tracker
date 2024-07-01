import ButtonApp from "./components/ButtonApp.vue";
import InputApp from "./components/InputApp.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ButtonApp: typeof ButtonApp;
    InputApp: typeof InputApp;
  }
}
