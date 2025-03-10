import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faArrowLeft, faTwitter, faInstagram, faFacebook);

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
