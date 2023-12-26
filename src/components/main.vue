<template>

   
    
    
<div class="min-h-screen bg-mywhite flex flex-col ">

    
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

<p id="test">ggs</p>

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
</style>