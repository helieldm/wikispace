import { createRouter, createWebHistory } from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import debug from "./components/debug.vue"
import home from "./components/home.vue"
import events from "./components/events.vue"
import vessels from "./components/vessels.vue"
import astronauts from "./components/astronauts.vue";
import e429 from "./components/e429.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: home},
        {path: '/astronauts', component: astronauts},
        {path: '/vessels', component: vessels},
        {path: '/debug', component: debug},
        {path: '/events', component: events},
        {path: '/e429', component: e429}
    ]
});

const app = createApp(App) // On crée une instance de Vue à partir de App.vue
app.use(router) // On lui dit que le projet va utiliser les routes définies plus haut
app.mount('#app') // et on lui dit de mettre tout le contenu des vues à l'interieur de la balise div#app
// qui est dans index.html à la racine du projet

// surtout ne touche pas le code ( à part les routes ) il est dans un équilibre précaire et je déconseille de le
// brusquer MDR

