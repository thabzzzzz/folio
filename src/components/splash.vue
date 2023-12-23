<script setup>

</script>

<template>
     <div class="min-h-screen bg-#cbd5e1 flex flex-col items-center justify-center">
    <div class="flex items-center">
      <img src="../assets/alien.svg" alt="" class="inline-block w-16">
      <h4 class="text-4xl mx-4">insert coin</h4>
      <img src="../assets/alien.svg" alt="" class="inline-block w-16">
    </div>
    <span class="loading text-7xl"></span>
  </div>
    
</template>

<style scoped>
@font-face {
    font-family: start;
    src: url(../assets/fonts/start.ttf);
}

@font-face {
    font-family: afacad;
    src: url(../assets/fonts/afacad.ttf);
}
 h4, .loading{
    font-family: start;
    color: #B6F405;
 }
 
 .loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4,end) 900ms infinite;      
  animation: ellipsis steps(4,end) 2200ms infinite;
  content: "\2026"; 
  width: 0px;
  
}
.loading {
  font-family: start;
  display: block; 

}

@keyframes ellipsis {
  to {
    width: 1.25em;    
  }
}

@-webkit-keyframes ellipsis {
  to {
    width: 1.25em;    
  }
}


</style>