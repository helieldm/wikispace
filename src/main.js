import { createRouter, createWebHistory } from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import debug from "./components/debug.vue"
import home from "./components/home.vue"
import eventVue from "./components/event.vue"
import astronauts from "./components/astronauts.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: home},
        {path: '/astronauts', component: astronauts},
        {path: '/debug', component: debug},
        {path: '/events', component: eventVue},
    ]
});

const app = createApp(App) // On crée une instance de Vue à partir de App.vue
app.use(router) // On lui dit que le projet va utiliser les routes définies plus haut
app.mount('#app') // et on lui dit de mettre tout le contenu des vues à l'interieur de la balise div#app
// qui est dans index.html à la racine du projet

// surtout ne touche pas le code ( à part les routes ) il est dans un équilibre précaire et je déconseille de le
// brusquer MDR

