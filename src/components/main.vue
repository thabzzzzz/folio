<template>




  <div class="min-h-screen bg-mygrey  " id="page-top">
    <div class="navbar mb-48">
            <div>
              <ul class="font-medium ">
            <li class="homelink start-again-link">
              <router-link to="/" class="link text-mygreen text-4xl p-0 m-0">thabiso</router-link>
            </li>
          </ul>
            </div>
            <div>
              <ul class="font-medium  bg-mygrey ">
              <li class="start-again-link p-0 m-0">
                <router-link to="#aboutme" class="link text-mygreen text-4xl hover-blink p-0 m-0">about</router-link>
              </li>
              <li class="start-again-link p-0 m-0">
                <router-link to="#projects"
                  class="link text-mygreen text-4xl hover-blink p-0 ml-10">projects</router-link>
              </li>
            </ul>
            </div>
        </div>




    <div class="mx-4 flex justify-between">

      

     

      <div class="col-span-3">
          <p class="mt-24 text-4xl ">I craft digital solutions that immerse and inspire<br> people through development
            and design.</p>
        </div>
        
        <div class="welcome-block ml-24">
          <h2 class="welcome text-6xl" id="w1" style="grid-column-end: span 6;">welcome</h2>
          <h2 class="welcome text-6xl mt-6" id="w2" style="grid-column-end: span 6;">welcome</h2>
          <h2 class="welcome text-5xl mt-6" id="w3" style="grid-column-end: span 6;">welcome</h2>
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
    <div class="about-me-section mt-36 px-24" id="aboutme">
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
            web developer based in Sandton, Johannesburg. Fluent
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


        <div class="flex items-center justify-center mb-24">
          <h2 class="text-5xl">Frontend:</h2>
          <img src="../assets/images/f.png" alt="metalslug f" class="ml-2 w-16" />
        </div>

        <!-- front end skills start -->

        <div class=" mb-40">

          <div class="skill-container">
            <div class="skillcol1 text-center mb-24">
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
            <div class="skillcol2 text-center mb-24">
              <img src="../assets/images/vue.png" alt="vue" class="skillblock">
            </div>
            <div class="text-center mb-24">
              <img src="../assets/images/bootstrap.png" alt="bootstrap" class="skillblock">
            </div>
            <div class="text-center mb-24">
              <img src="../assets/images/tailwind.png" alt="tailwind" class="skillblock">
            </div>
          </div>

        </div>



        <div class="flex items-center justify-center mb-24">
          <h2 class="text-5xl">Backend:</h2>
          <img src="../assets/images/b.png" alt="metalslug b" class="ml-2 w-16" />
        </div>

        <!-- backend skills -->

        <div class=" mb-40">
          <div class="skill-container">
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

        </div>

        <!-- end of backend -->

        <div class="flex items-center justify-center mb-24">
          <h2 class="text-5xl">Tools:</h2>
          <img src="../assets/images/t.png" alt="metalslug t" class="ml-2 w-16" />
        </div>

        <!-- backend skills -->

        <div class=" mb-40">

          <div class="skill-container">
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



      </div>

      <!-- projs -->

      <div class="about-me text-center mt-60" id="projects">
        <h4 class="text-4xl text-mygreen ">projects</h4>
      </div>
      <div class="grid grid-cols-6 my-40">












        <div class="col-span-4 ">
          <router-link to="swrv">
            <h3 class="mb-10 text-4xl pr-24">1. SWRV</h3>
          </router-link>
          <router-link to="swrv"><img src="../assets/images/swrv.jpg" class="project-imgs mb-16"
              alt="swrv"></router-link>
          <p class="text-3xl">
            Movie browsing site where users can search and filter curated movie releases dynamically updated through the
            moviesDB api.
          </p>
        </div>

        <div class="swrv-description">
          <div class="mini-skills grid grid-cols-2 gap-2  mb-96">
            <div >
              <img src="../assets/images/api.png" class="w-40">

            </div>
            <div>
              <img src="../assets/images/tailwind.png" class="w-40">
            </div>
            <div>
              <img src="../assets/images/html.png" class="w-40">
            </div>

            <div>
              <img src="../assets/images/vue.png" class="w-40">
            </div>

          </div>
        </div>

        <!-- end of swrv -->








        <div class="col-span-4 mb-2">
          <router-link to="fix8">
            <h3 class="mb-10 text-4xl pr-24  ">2. fix8</h3>
          </router-link>
          <router-link to="fix8"><img src="../assets/images/fix8.jpg" class="project-imgs mb-16"
              alt="fix8"></router-link>
          <p class="text-3xl proj-description">

            Event creation site where users can post events for others to see. The events can be edited by the original
            user and displayed on the feed for other users to see, who can then rate the events.

          </p>
        </div>



        <div class="swrv-description">
          <div class="mini-skills grid grid-cols-2 gap-2  mb-96">
            <div >
              <img src="../assets/images/php.png" class="w-40">

            </div>
            <div>
              <img src="../assets/images/mysql.png" class="w-40">
            </div>
            <div>
              <img src="../assets/images/jquery.png" class="w-40">
            </div>

            

          </div>
        </div>

        
        <!-- end of survey -->








        <div class="col-span-4">
          <router-link to="pumplink">
            <h3 class="mb-10 text-4xl pr-24">3. Quizzy</h3>
          </router-link>

          <router-link to="pumplink"><img src="../assets/images/quiz1.png" class="project-imgs mb-16"
              alt="pumplink"></router-link>
          <p class="text-3xl">Developed a full-featured quiz app using Laravel and Vue.js, focusing on user participation, score tracking, and leaderboard management. Integrated with an SQL database for efficient data handling and featured secure authentication, real-time score updates, and a dynamic quiz interface. The app's intuitive UI provides a smooth user experience, allowing users to submit high scores and track their quiz performance over time.
          </p>
        </div>

        <div class="swrv-description">
          <div class="mini-skills grid grid-cols-2 gap-2  mb-96">
            <div >
              <img src="../assets/images/laravel.png" class="w-40">

            </div>
            <div>
              <img src="../assets/images/bootstrap.png" class="w-40">
            </div>
            <div>
              <img src="../assets/images/mysql.png" class="w-40">
            </div>

           

          </div>
        </div>

        <!-- end of pumplink -->





<!-- start of genie -->

<div class="col-span-4">
          <router-link to="genie">
            <h3 class="mb-10 text-4xl pr-24">4. genie</h3>
          </router-link>

          <router-link to="genie"><img src="../assets/images/genie1.jpg" class="project-imgs mb-16"
              alt="genie"></router-link>
          <p class="text-3xl">
            Full stack game platform where users can browse the latest games and create their own collection

          </p>
        </div>

        <div class="swrv-description">
          <div class="mini-skills grid grid-cols-2 gap-2  mb-96">

            <div >
              <img src="../assets/images/laravel.png" class="w-40">

            </div>
            <div >
              <img src="../assets/images/api.png" class="w-40">

            </div>
            <div>
              <img src="../assets/images/tailwind.png" class="w-40">
            </div>
            

            <div>
              <img src="../assets/images/vue.png" class="w-40">
            </div>

          </div>
        </div>






        <!-- end of genie -->


























        <div class="gameover text-center col-span-6">
          <h4 class="text-4xl text-mygreen mb-24">contact me</h4>
          <p class="text-3xl mb-20">
            Thanks for checking out my portfolio. I'm currently looking for a junior front-end, back-end or full stack
            web development role. Whether you have a question, offer, or just want to chat, feel free to contact me, and
            I'll get back to you!
          </p>


          <div class="flex justify-center">
            <a href="https://www.linkedin.com/in/thabiso-mosenohi-822945284/" target="_blank" rel="noopener noreferrer">
              <img src="../assets/images/linkedin.svg" class="contact-icons w-24 mx-4">
            </a>
            <a href="https://github.com/thabzzzzz" target="_blank" rel="noopener noreferrer">
              <img src="../assets/images/gh.svg" class="contact-icons w-24 mx-4">
            </a>

          </div>
          <a href="mailto:tmoseohi99@gmail.com " target="_blank" rel="noopener noreferrer">
            <h4 class="text-4xl text-mygreen mb-24 mt-10">tmosenohi99@gmail.com</h4>
          </a>

        </div>





        <div class="gameover text-center col-span-6 ">
          <h4 class="text-6xl text-mygreen">game over</h4>

          <div class="mt-52">

          </div>

          <router-link to="#page-top" class="start-again-link ">
            <h4 class=" text-4xl  text-mygreen">start again</h4>
          </router-link>


        </div>

      </div>

    </div>

  </div>


</template>

<script setup>



</script>

<style scoped>
.link {
  font-family: start;

}


#test {
  right: 0;
  position: absolute;
}

h1,
h4 {
  font-family: start;
}

p,
h3 {
  font-family: afacad;

}

#w1 {
  font-family: pacman;
}

#w2 {
  font-family: mario;
}

#w3 {
  font-family: ls;
}

h2,
p {
  color: white;
}


.link {
  font-family: start;
  position: relative;
  display: inline-block;

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

.flex-grow {
  height: 360px;
}

.section2 {
  width: 87%;
}

.photo {
  height: 600px;
  width: 680px;
}

.skillblock {
  width: 300px;
}

.flex {
  display: flex;
  align-items: center;
}


.ml-2 {
  margin-left: 0.5rem;
}

h3 {
  color: white;
}

.project-imgs {
  width: 90%;
}

.mini-skills {
  padding-top: 480px;
}

.mini-skills2 {
  padding-top: 410px;
}

.even-name {
  margin-left: 910px;
}


.even-div {
  width: 200px;

}

.sb2 {
  margin-left: 120px;
}

.secondprojsb {
  top: -550px;
}

.proj-description {
  width: 88%;
}

.gameover {
  margin-top: 500px;
}

#page-top {
  scroll-behavior: smooth;
}


.start-again-link {
  display: inline-block;
  padding: 3px 5px;
  border-radius: 0;


}

.start-again-link:hover {
  animation: alternateColors 2s infinite;
}

@keyframes alternateColors {

  0%,
  100% {
    background-color: white;
  }

  50% {
    background-color: rgba(0, 0, 0, 0);
  }
}

@media (max-width: 1600px) {
  .section2 {
    text-align: center;
    margin: 0 auto;
  }

  .about-me {
    text-align: center;
  }

  .photo {
    width: 100%;
    margin: 0 auto 20px;
    display: block;
  }

  .grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .grid>div {
    width: 100%;
    max-width: 600px;
  }
  .mini-skills {
  padding-top: 80px;
  justify-content: center;
}
.project-skills{
  display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
}

.skill-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;
}

.skillblock {
  width: 100%;
  max-width: 300px;
  height: auto;
}

.navbar{
  display:flex;
  justify-content: space-between;
}

@media (max-width: 1600px) {
  .skill-container {
    grid-template-columns: repeat(2, 1fr);
  
  }
 
}

@media (max-width: 768px) {
  .skill-container {
    grid-template-columns: 1fr;
  }
}
</style>