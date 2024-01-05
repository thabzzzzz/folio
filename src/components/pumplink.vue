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

    <div class="grid grid-cols-6 mt-48">

    <div class="col-span-4">
        
        <img src="../assets/images/pumplink.jpg" >
    </div>
    <div class="pt-32 welcome-block ml-24">
       <p>g</p>
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
</style>