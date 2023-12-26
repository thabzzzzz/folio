import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'

import App from './App.vue'

import splash from './components/splash.vue'
import main from './components/main.vue'

const routes=[

    {
        path:'/',component:splash
    },
    {
        path:'/main',component:main
    },
];

const router = createRouter({

        history:createWebHistory(),
        routes:routes

});

createApp(App).use(router).mount('#app')
