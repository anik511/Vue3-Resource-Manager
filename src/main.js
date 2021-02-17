import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseCard from "./components/UI/BaseCard";
import BaseButton from "./components/UI/BseButton";
import BaseDialog from "./components/UI/BaseDialog"

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.use(store).use(router).mount('#app')
