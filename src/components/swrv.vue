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
               
             </div>
           </div>
         </nav>

   <div class="grid grid-cols-6 mt-48 ml-10">

   <div class="col-span-4">
       
       

<div id="default-carousel" class="relative w-full" data-carousel="static">
   <!-- Carousel wrapper -->
   <div class="relative h-96 overflow-hidden carimg">
        <!-- Item 1 -->
       <div class="hidden duration-700 ease-in-out" data-carousel-item>
           <img src="../assets/images/swrv.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
       </div>
       <!-- Item 2 -->
       <div class="hidden duration-700 ease-in-out" data-carousel-item>
           <img src="../assets/images/swrv2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
       </div>
      
     
   </div>
   <!-- Slider indicators -->
   <div class="flex justify-center space-x-4">
   <!-- Thumbnail for Slide 1 -->
   <button type="button" class="w-24 h-24  overflow-hidden" data-carousel-slide-to="0">
     <img src="../assets/images/swrv.png" alt="Thumbnail 1">
   </button>
   <!-- Thumbnail for Slide 2 -->
   <button type="button" class="w-24 h-24 overflow-hidden" data-carousel-slide-to="1">
     <img src="../assets/images/swrv2.png" alt="Thumbnail 2">
   </button>
   <!-- Add more thumbnails for other slides -->

 </div>
   
  
</div>



  
 </div>

 <div class="ml-20 mt-24">
 <router-link to="main"><h1 class="text-mygreen">back</h1></router-link>
 </div>




   </div>
   <div class="pt-32  ml-10 proj-desc mb-20">
      <p class="text-2xl">   
        Curated movie site more focused on the front end side of development, and uses Vue 3 and the moviesDB api
to deliver a dynamic list of the latest movies to browse.
Focuses on user interactivity and feedback via subtle 
animations and the SPA model. Has search and filter
functionality all done via Vue. This functionality is fully animated for an enhanced user experience and feedback 
    </p>
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

.proj-desc{
   width: 1200px;
}

.carimg{
 height: 800px;
}

</style>