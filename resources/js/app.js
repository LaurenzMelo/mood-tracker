import './bootstrap';
import { createApp } from 'vue';
import moment from 'moment'

window.moment = moment;

const app = createApp({});
app.component("home", Home);
app.component("customization", Customization)
app.component("calendar", Calendar)

// Admin
import Home from "./components/admin/home.vue";
import Customization from "./components/admin/customization.vue";
import Calendar from "./components/admin/calendar.vue";

app.mount('#app');
