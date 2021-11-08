import { createApp } from 'vue'
import App from './App.vue'
import getCamName from "@/store";

getCamName();

createApp(App).mount('#app')
