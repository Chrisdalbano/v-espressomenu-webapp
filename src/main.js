import { createApp } from "vue";

import App from "./App.vue";
import drinkInfo from "./components/drinkInfo.vue";

const app = createApp(App);
app.component("drink-info", drinkInfo);
app.mount("#app");
