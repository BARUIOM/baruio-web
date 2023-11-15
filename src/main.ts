import { createApp } from "vue";
import { RouterView } from "vue-router";

import "./style.css";
import { Router } from "./router";

const app = createApp(RouterView);

app.use(Router);
app.mount('#app');
