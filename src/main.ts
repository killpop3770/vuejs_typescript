import { createApp } from 'vue'
import App from './App.vue'
// import getCamName from "@/store";

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Vue from "vue";
Vue.useCssModule("BootstrapVue");

// getCamName();

createApp(App).mount('#app')
