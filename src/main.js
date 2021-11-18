import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from '@/includes/firebase';
import '@/assets/tailwind.css';
import '@/assets/main.css';
import '@themesberg/flowbite';
import components from '@/components/UI';
import directives from '@/directives';
import VeeValidatePlugin from '@/includes/validation';

let app;
auth.onAuthStateChanged(()=>{
    if(!app){

        app = createApp(App)
    
        Array.from(components).forEach(component => {
            app.component(component.name, component)
        });
        
        directives.forEach(directive => {
            app.directive(directive.name, directive)
        })
        
        app
            .use(store)
            .use(router)
            .use(VeeValidatePlugin)
            .mount('#app')
    }
})




