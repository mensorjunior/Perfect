<template>
    <div>
      <vue-carousel>
        <img v-for="(img, index) in images" :key="index" :src="img.src" :alt="img.alt" />
      </vue-carousel>
    </div>
  </template>
  
  <script>
  import VueCarousel from 'vue-carousel';
  
  export default {
    name: 'CarouselComponent',
    components: {
      VueCarousel,
    },
    data() {
      return {
        images: [
          { src: "Fundo1.jpg", alt: 'Image 1' },
        ],
      };
    },
    mounted() {
    console.log('CarouselComponent mounted');
  },
  };
  </script>