import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import './assets/styles/style.css';

import App from './App.vue';
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
});
app.mount('#app');
