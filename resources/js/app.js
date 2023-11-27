import './bootstrap';
import { createApp } from 'vue';
import moment from 'moment'

window.moment = moment;

const app = createApp({});
app.component("home", Home);

// Admin
import Home from "./components/admin/home.vue";




app.mount('#app');
