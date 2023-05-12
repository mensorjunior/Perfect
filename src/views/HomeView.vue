<template>
  <BannerMenu/>
  <div class="main-container">
    <h1>HOME</h1>
    <CarouselComponent/>
    <ContatoForm/>
  </div>
</template>

<script>
import BannerMenu from "../components/BannerMenu.vue"

import ContatoForm from "../components/ContatoForm.vue"

import CarouselComponent from "../components/CarouselComponent.vue"

export default {
  name: "Home-Menu",
  components: {
    BannerMenu,
    CarouselComponent,
    ContatoForm,
  }
}
</script>
 