<template>

      
        
        
    <div class="min-h-screen bg-mygrey flex flex-col  relative ">
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

    <div class="flex-grow "></div>

    <div class="scroll slide bg-mygreen mb-24 ">
      <div class="m-scroll bg-mygreen ">
        <div>
      
          <h1>
            <span>dev </span><span>design </span><span>branding </span>
            <span>dev </span><span>design </span><span>branding </span>
          </h1>
        </div>
      </div>
    </div>
    <div class="about-me-section mt-36 px-24">
        <div class="about-me text-center">
            <h4 class="text-4xl text-mygreen ">about me</h4>
        </div>
        <div class="grid grid-cols-2 my-40">
            <div class="col-span-1">
                <img src="../assets/images/photo2.png" class="photo " alt="thabiso photo">
            </div>
            <div class="col-span-1  section2">

              <div class="text-2xl text-white s2 pt-20">
                    Hi, I'm Thabiso Mosenohi. I'm a multidisciplinary
                    web developer based in Pretoria. Fluent
                    in frontend, backend, and design, I combine
                    these skills to craft a seamless, well-rounded
                    digital solution.
                </div>
                <br><br>
              <div class="text-2xl text-white s2">
                    Having an educational background of 4 years 
                    doing the BiS Multimedia course at the
                    University of Pretoria, my expertise lie in the 
                    backend , and although I didn't manage to 
                    finish the course, I have an extensive knowledge 
                    base and eager to prove myself and learn more.
                </div>
                <br><br>
                <div class="text-2xl text-white s2">
                    When I'm not developing or designing,
                    I enjoy following PC hardware trends, old
                    school arcade games, dabbling in game 
                    engines and binging anime.   

                </div>
            </div>
        </div>
        






        <div class="about-me-section mt-36 px-24 ">
        <div class="about-me text-center">
            <h4 class="text-4xl text-mygreen mb-24 ">skills</h4>
        </div>
        

        <div class="flex items-center mb-24">
            <h2 class="text-5xl">Frontend:</h2>
            <img src="../assets/images/f.png" alt="metalslug f" class="ml-2 w-16" />
        </div>

        <!-- front end skills -->

        <div class="grid grid-cols-2 pl-52">

            <div class="text-center mb-24">
                <img src="../assets/images/html.png" alt="html" class="skillblock">
            </div>
            <div class="text-center mb-24">
                <img src="../assets/images/css.png" alt="css" class="skillblock">
            </div>

            <div class="text-center mb-24">
                <img src="../assets/images/js.png" alt="js" class="skillblock">
            </div>
            <div class="text-center mb-24">
                <img src="../assets/images/jquery.png" alt="jquery" class="skillblock">
            </div>


            <div class="text-center mb-24">
                <img src="../assets/images/vue.png" alt="vue" class="skillblock">
            </div>
            <div class="text-center mb-24">
                <img src="../assets/images/bootstrap.png" alt="bootstrap" class="skillblock">
            </div>

            <div class="text-center mb-24">
                <img src="../assets/images/tailwind.png" alt="tailwind" class="skillblock">
            </div>
            


        



        </div>
        <div class="flex items-center mb-24">
            <h2 class="text-5xl">Backend:</h2>
            <img src="../assets/images/b.png" alt="metalslug b" class="ml-2 w-16" />
        </div>

        <!-- backend skills -->

        <div class="grid grid-cols-2 pl-52">

            <div class="text-center mb-24">
                <img src="../assets/images/php.png" alt="php" class="skillblock">
            </div>
            <div class="text-center mb-24">
                <img src="../assets/images/laravel.png" alt="laravel" class="skillblock">
            </div>

            <div class="text-center mb-24">
                <img src="../assets/images/mysql.png" alt="mysql" class="skillblock">
            </div>
            <div class="text-center mb-24">
                <img src="../assets/images/api.png" alt="api" class="skillblock">
            </div>


        </div>

    <!-- end of backend -->

    <div class="flex items-center mb-24">
            <h2 class="text-5xl">Tools:</h2>
            <img src="../assets/images/t.png" alt="metalslug t" class="ml-2 w-16" />
        </div>

        <!-- backend skills -->

        <div class="grid grid-cols-2 pl-52">

            <div class="text-center mb-24">
                <img src="../assets/images/git.png" alt="git" class="skillblock">
            </div>
            <div class="text-center mb-24">
                <img src="../assets/images/ps.png" alt="laravel" class="skillblock">
            </div>

            <div class="text-center mb-24">
                <img src="../assets/images/xd.png" alt="mysql" class="skillblock">
            </div>
            <div class="text-center mb-24">
                <img src="../assets/images/illustrator.png" alt="api" class="skillblock">
            </div>


        </div>



    </div>

<!-- projs -->

<div class="about-me text-center mt-60">
            <h4 class="text-4xl text-mygreen ">projects</h4>
 </div>
        <div class="grid grid-cols-6 my-40">
          
          <div class="col-span-4">
           <h3 class="mb-10 text-4xl pr-24">1. Pumplink</h3>
           <img src="../assets/images/pumplink.jpg" class="project-imgs mb-16" alt="pumplink">
           <p class="text-3xl">Site rebuild and rebrand for Pumplink using Laravel. 
                                Needed some modernisation with UI elements and
                                theming, and  a dynamic quotation generator for 
                                their products and services
            </p>
          </div>
          
          <div class="mb-64">
           <div class="mini-skills grid grid-cols-2 gap-2 ">
              <div class="">
                <img src="../assets/images/laravel.png"  class="w-56">
                
              </div>
              <div >
                <img src="../assets/images/bootstrap.png" class="w-56">
              </div>
              <div >
                <img src="../assets/images/html.png" >
              </div>

              <div >
                <img src="../assets/images/mysql.png" >
              </div>

           </div>
          </div>
          
          <!-- end of pumplink -->
 
          <div class="col-span-2 secondprojsb">
            <div class="mini-skills2 grid grid-cols-2 gap-2 ">
              <div class="even-div sb2">
                <img src="../assets/images/laravel.png"  class="w-40">
                
              </div>
              <div class="even-div ">
                <img src="../assets/images/bootstrap.png" class="w-40" >
              </div>
              <div class="even-div sb2">
                <img src="../assets/images/html.png" class="w-40">
              </div>

              <div class="even-div">
                <img src="../assets/images/mysql.png" class="w-40">
              </div>

              <div class="even-div sb2">
                <img src="../assets/images/jquery.png" class="w-40">
              </div>

           </div>
          </div>
          
          <div class="col-span-4">
            <h3 class="mb-10 text-4xl pr-24  even-name">2. genie</h3>
           <img src="../assets/images/genie.jpg" class="project-imgs mb-16" alt="genie">
           <p class="text-3xl">Wishlist site where users can register an account and create their personal wishlists.
                                Once registerd, users can create, delete and update their wishlist items. 
                                Unregistered users and users that try to access the main page are instead redirected to the login/registration page.
                                It also has simple search funtionality to quickly look up specific items. It has data aggregation in the form of price summation and formatting, and displays the items via bootstrap cards.

            </p>
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

    .scroll {
      margin-top: auto;
      margin-bottom: 24px;
      width: 100%;
      background-color: #0F100E;
      overflow: hidden;
      z-index: 1;
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

    .flex-grow{
        height: 270px;
    }

    .section2{
        width: 87%;
    }

    .photo{
        height: 600px;
        width: 680px;
    }

    .skillblock{
        width: 400px;
    }

    .flex {
      display: flex;
      align-items: center; 
    }

   
    .ml-2 {
      margin-left: 0.5rem;
    }

    h3{
      color: white;
    }

    .project-imgs{
      width: 90%;
    }

    .mini-skills{
      padding-top:480px ;
    }

    .mini-skills2{
      padding-top:410px ;
    }

    .even-name{
      right:0;
    }


    .even-div{
      width: 200px;

    }

    .sb2{
      margin-left: 120px;
    }

    .secondprojsb{
      top:-550px;
    }
    </style>