
<script>
export default {
  data() {
    return {
      activeCircle: 1,
    };
  },
  mounted() {
    this.animateCircles();
  },
  methods: {
    animateCircles() {
      setInterval(() => {
        this.activeCircle = (this.activeCircle % 3) + 1;
      }, 1000); // Change speed here (milliseconds)
    },
  },
};
</script>
<template>
    <div class="loader">
      <div v-for="index in 3" :key="index" :class="`circle-${index} ${activeCircle === index ? 'active' : ''}`"></div>
    </div>
  </template>
  
 
  
  <style scoped>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  
  .circle-1,
  .circle-2,
  .circle-3 {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #000;
    margin: 0 5px;
    opacity: 0.3;
  }
  
  .active {
    opacity: 1;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    50% {
      opacity: 0.3;
    }
  }
  </style>
  