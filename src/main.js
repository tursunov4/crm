import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./plugins/vee-validate"
import 'bootstrap/dist/css/bootstrap.min.css'
import { validate } from 'vee-validate'
createApp(App).use(store).use(router).mount('#app')
