import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'

import App from './App.vue'

import splash from './components/splash.vue'
import main from './components/main.vue'
import pumplink from './components/pumplink.vue'

const routes=[

    {
        path:'/',component:splash
    },
    {
        path:'/main',component:main
    },
    {
      path:'/pumplink',component:pumplink
  },
];

const router = createRouter({

        history:createWebHistory(),
        routes:routes,

        scrollBehavior(to, from, savedPosition) {
            if (to.hash) {
              return {
                el: to.hash,
                behavior: 'smooth', 
              };
            } else if (savedPosition) {
              return savedPosition;
            } else {
              return { top: 0 };
            }
          },

});

createApp(App).use(router).mount('#app')
