<template>

   
    
    
<div class="min-h-screen bg-mygrey flex flex-col  ">
    <div class="mx-4">
        <nav>
        <div class="max-w-screen flex flex-wrap items-center justify-between mx-0">
          <ul class="font-medium flex flex-col mt-4 bg-mygrey">
            <li class="homelink">
              <router-link to="/" class="link text-mygreen text-4xl">thabiso</router-link>
            </li>
          </ul>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-row p-4 md:p-0 mt-4 bg-mygrey">
              <li>
                <router-link to="/" class="link text-mygreen mr-16 text-4xl hover-blink">about</router-link>
              </li>
              <li>
                <router-link to="/" class="link text-mygreen text-4xl hover-blink">projects</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

<div class="grid grid-cols-6 mt-48">

<div class="col-span-4">
    
    <p class="mt-24 text-4xl">I craft digital solutions that immerse and inspire<br>
        
people through development and design.</p>
</div>
<div class="pt-10 welcome-block ml-24">
    <h2 class="welcome text-6xl" id="w1">welcome</h2>
    <h2 class="welcome text-6xl mt-6" id="w2">welcome</h2>
    <h2 class="welcome text-5xl mt-6" id="w3">welcome</h2>
</div>

</div>

</div>



<div class="scroll slide bg-mygreen h-28 ">
  <div class="m-scroll bg-mygreen h-28">
    <div>
      <!-- Duplicate text content for a seamless loop -->
      <h1>
        <span>dev </span><span>design </span><span>branding </span>
        <span>dev </span><span>design </span><span>branding </span>
      </h1>
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

h1,h4{
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

h2,p{
    color: white;
}


.link {
  font-family: start;
  position: relative;
  display: inline-block;
  padding: 10px 20px;
}

.link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0;
  z-index: -1;
  animation: blink 0.5s infinite alternate;
}

.link:hover::before {
  opacity: 1;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.slide {

  margin-top: auto;
}

.scroll {
  position: relative;
  width: 100vw;
  height: 15%;
  min-height: 150px;
  background-color: #252525;
  overflow: hidden;
  z-index: 1;
  margin: 0;
  padding: 0;
}

.m-scroll {
  overflow: hidden;
  height: 100%;
  white-space: nowrap;
  animation: scrollText 10s infinite linear;
  margin: 0;
  font-size: 0;
  display: inline-block;
}

span {
  font-size: 50px;
  display: inline-block;
  min-width: 100vw;
  margin: 0;
  padding: 0;
  color: black;
}

@keyframes scrollText {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}

</style>