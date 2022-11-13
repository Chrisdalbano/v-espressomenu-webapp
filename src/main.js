import { createApp } from "vue";

import App from "./App.vue";

import drinkInfo from "./components/drinkInfo.vue";

import NewDrink from "./components/NewDrink.vue";

const app = createApp(App);
app.component("drink-info", drinkInfo);
app.component("new-drink", NewDrink);
app.mount("#app");
