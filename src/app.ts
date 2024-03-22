import { createApp } from 'nativescript-vue';
import { router } from './routes';

import App from './components/App.vue';

const app = createApp(App);
app.use(router);
app.start();
