import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/main.css'
import components from '@/components/UI'
import VeeValidatePlugin from '@/includes/validation'

const app = createApp(App)

Array.from(components).forEach(component => {
    app.component(component.name, component)
});




app
    .use(store)
    .use(router)
    .use(VeeValidatePlugin)
    .mount('#app')
