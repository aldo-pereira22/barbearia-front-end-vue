<template>
      <div id="nav">

          <router-link to="/" >
              <img :src="logo" :alt="alt" id="logo">
          </router-link>
        
    <router-link to="/">Home</router-link> |
    <router-link to="/agendamento">Agendamento</router-link> |
    <router-link to="/teste" > Teste </router-link>
  </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
    
}
</script>


<style scoped>
     h1 {
    color: red;
  }
</style>