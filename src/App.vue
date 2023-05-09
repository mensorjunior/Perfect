<template>
  <div>
    <NavbarMenu :logo="logo_src" :alt="app_name"/>
  </div>
  <div> 
    <router-view/>
  </div>
  <div> 
    <FooterMenu/>
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'
import FooterMenu from './components/FooterMenu.vue'

export default{
  components: {
    NavbarMenu,
    FooterMenu,
  },

  data(){
    return {
      logo_src: "img/icons/Logo.png",
      app_name: "Entre em contato conosco."
    }
  }
}
</script> 

<style>
*{
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
    margin: 50px;
    min-height: 250px;
}

h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
}
</style>
 