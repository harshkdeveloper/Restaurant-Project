import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure you import the router from where it's defined

createApp(App).use(router).mount('#app');
