import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./styles/init.less";
import { router } from "./router";
import { setSvgIcon } from "./components/svg-icon";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

setSvgIcon(app);

app.mount("#app");
