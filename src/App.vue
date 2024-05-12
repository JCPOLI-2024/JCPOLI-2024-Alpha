<!--Navbar da jcpoli no site, antes chamada de NavBarJCPOLI, agora só NavBar -->
<template>
  <v-app id="app">
    <!-- Renderiza o NavBar -->
    <NavBar />
    <notifications position="top right" />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
//import NavBarJCPOLI from "@/components/NavBarJCPOLI.vue";

export default {
  components: {
    NavBar,
    //NavBarJCPOLI
  },
  // Usado quando se tinha uma integração entre os sites para que houvesse uma navbar exclusiva para a JCPOLI
  // computed: {
  //   isSpecialRoute() {
  //     // Verifica se a rota atual está relacionada à JCPOLI
  //     return this.$route.path.startsWith("/JCPOLI");
  //   } 
  // }
}
</script>


<style lang="scss">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: #fff !important;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.footer-subscribe {
  background-color: #13264a;
  min-height: 86px;
  vertical-align: middle;
}

.view {
  box-shadow: inset 0 7px 19px -7px rgba(0, 0, 0, 0.11);
}

.theme--light.application {
  background-color:  #ffffff !important;
}
</style>
