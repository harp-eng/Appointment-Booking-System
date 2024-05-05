import './bootstrap';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import router from './route.js';

const app = createApp({});

app.use(router);

app.mount("#app")