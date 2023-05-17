<template>
  <BannerMenu/>
  <div class="main-container">
    <h1>HOME</h1>
    <CaroselBo/>
    <ContatoForm/>
  </div>
</template>

<script>
import BannerMenu from "../components/BannerMenu.vue"

import ContatoForm from "../components/ContatoForm.vue"

import CaroselBo from "@/components/CaroselBo.vue"

export default {
  name: "Home-Menu",
  components: {
    BannerMenu,
    ContatoForm,
    CaroselBo
  }
}
</script>
 