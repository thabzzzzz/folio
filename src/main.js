import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'

import App from './App.vue'

import splash from './components/splash.vue'
import main from './components/main.vue'
import pumplink from './components/pumplink.vue'
import genie from './components/genie.vue'
import swrv from './components/swrv.vue'
import fix8 from './components/fix8.vue'

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
  {
    path:'/genie',component:genie
},
{
  path:'/swrv',component:swrv
},
{
  path:'/fix8',component:fix8
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
