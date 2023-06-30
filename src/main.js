import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { authentication } from './plugins/authentication'


/* Aqui se pueden poner los estilos para el portal (personales, templeate, material) */ 
 import 'bootstrap/dist/css/bootstrap.css'
 import "bootstrap"

const app = createApp(App);

app.use(createPinia())

authentication.install().then(() =>{
    app.use(router)
    app.mount('#app');
})

//createApp(App).use(router).mount('#app')
