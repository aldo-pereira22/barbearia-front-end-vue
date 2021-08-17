<template>

  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  components:{
    Navbar,
    Footer
  },
  data(){
    return {
      logo_src: "/img/barbershop.png",
      app_name: "Barber Shop"
    
    }
  } 
}
</script>
<style>
  *{
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin:0;
    box-sizing: 10px;
  }
  
  .main-container{
    margin: 50px;
    min-height: 250px;
    
  }
</style>
