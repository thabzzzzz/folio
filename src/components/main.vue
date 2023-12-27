<template>

   
    
    
<div class="min-h-screen bg-mywhite flex flex-col  ">
    <div class="mx-4">
<nav >
  <div class="max-w-screen flex flex-wrap items-center justify-between mx-0 ">
    <ul class="font-medium flex flex-col  mt-4 bg-mywhite ">
        <li class="homelink">
            <router-link to="/" class="bg-mywhite link text-mygreen text-3xl">thabiso</router-link>
        </li>
     
      </ul>
   
    <div class="hidden  w-full md:block md:w-auto" id="navbar-default ">
        <ul class="font-medium flex flex-row p-4 md:p-0 mt-4 bg-mywhite">
        <li>
            <router-link to="/" class="bg-mywhite link text-mygreen mr-16 text-3xl">about</router-link>
        </li>
        <li>
            <router-link to="/" class="bg-mywhite link text-mygreen text-3xl">projects</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="grid grid-cols-6 mt-24">

<div class="col-span-4">
    <h1 class="text-mygreen mr-16 text-3xl ">intro</h1>
    <p class="mt-24 text-2xl">I craft digital solutions that immerse and inspire
        
people through development and design.</p>
</div>
<div class="pt-10 welcome-block">
    <h2 class="welcome text-6xl" id="w1">welcome</h2>
    <h2 class="welcome text-6xl mt-6" id="w2">welcome</h2>
    <h2 class="welcome text-5xl mt-6" id="w3">welcome</h2>
</div>

</div>

</div>
</div>    


</template>

<script setup>



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

h1{
    font-family: start;
}

p{
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

.welcome-block{
    right: 0px;
}
</style>