<template>
     <div class="min-h-screen bg-mygrey flex flex-col  relative " id="page-top">
        <div class="mx-4">
            <nav>
            <div class="max-w-screen flex flex-wrap items-center justify-between mx-0">
              <ul class="font-medium flex flex-col mt-4 bg-mygrey">
                <li class="homelink start-again-link">
                  <router-link to="/" class="link text-mygreen text-4xl">thabiso</router-link>
                </li>
              </ul>
              <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-row p-4 md:p-0 mt-4 bg-mygrey">
                  <li class="start-again-link">
                    <router-link to="/" class="link text-mygreen mr-16 text-4xl hover-blink">about</router-link>
                  </li>
                  <li class="start-again-link">
                    <router-link to="/" class="link text-mygreen text-4xl hover-blink">projects</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

    <div class="grid grid-cols-6 mt-48 ml-10">

    <div class="col-span-4">
        
        

<div id="default-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../assets/images/pumplink.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../assets/images/swrv.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../assets/images/pumplink.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../assets/images/pumplink.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../assets/images/pumplink.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="flex justify-center space-x-4">
    <!-- Thumbnail for Slide 1 -->
    <button type="button" class="w-24 h-24  overflow-hidden" data-carousel-slide-to="0">
      <img src="../assets/images/pumplink.jpg" alt="Thumbnail 1">
    </button>
    <!-- Thumbnail for Slide 2 -->
    <button type="button" class="w-24 h-24 overflow-hidden" data-carousel-slide-to="1">
      <img src="../assets/images/swrv.jpg" alt="Thumbnail 2">
    </button>
    <!-- Add more thumbnails for other slides -->
  </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-mygreen dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-mygreen dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>



   
  </div>

  <div class="ml-10">
    <p>gggggggg</p>
  </div>




    </div>
    <div class="pt-32 welcome-block ml-24">
       <p>g</p>
    </div>

    </div>

    </div>

</template>

<script setup>


import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})


    
</script>

<style  scoped>
 .link{
        font-family: start;
        
    }

    .homelink{
        margin-right: 600px;
    }
    #test{
        right: 0;
        position: absolute;
    }

    h1,h4{
        font-family: start;
    }

    p,h3{
        font-family: afacad;
        
    }

    #w1{
        font-family: pacman;
    }

    #w2{
        font-family: mario;
    }

    #w3{
        font-family: ls;
    }

    h2,p{
        color: white;
    }


    .link {
      font-family: start;
      position: relative;
      display: inline-block;
      padding: 10px 20px;
    }


    .flickity-carousel {
  width: 100%;
  margin-bottom: 20px;
}

#default-carousel button {
    /* Remove the background color */
    background-color: transparent;
}

</style>