<script setup>

</script>

<template>
  <header>
    <div class="wrapper">

      <router-link to="/">Splash</router-link>
      <router-link to="/main">Main</router-link>
   
    </div>
  </header>

<RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in"> 
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
