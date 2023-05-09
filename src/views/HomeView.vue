<template>
  <BannerMenu/>
  <div class="main-container">
    <h1>HOME</h1>
    <ContatoForm/>
  </div>
</template>

<script>
import BannerMenu from "../components/BannerMenu.vue"

import ContatoForm from "../components/ContatoForm.vue"

export default {
  name: "Home-Menu",
  components: {
    BannerMenu,
    ContatoForm
  }
}
</script>
 