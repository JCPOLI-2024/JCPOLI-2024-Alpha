<!-- Lógica original para manter o navbar da politecnica no site -->
<!-- 
<template>
  <v-app id="app">
    <NavBar v-if="$route.path==='/conta' ? false : true" />
    <notifications position="top right" />
    <router-view /> -->

    <!-- <div
      v-if="$route.path==='/conta' || $route.path==='/'? false : true"
      class="footer-subscribe rights-reserved"
    >
      <p>&copy; 4º Jornada Científica da Escola de Ciências Exatas e da Computação - JCECEC 2019</p>
    </div>-->
<!--     
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import router from "@/router";

@Component({
  components: {
    NavBar
  }
})
export default class App extends Vue {
  constructor() {
    super();
  }
}
</script> -->

<!-- Lógica improvisada (até ter um loyout) para manter o navbar da politecnica e o navbar da jcpoli(aparecer só nas abas da jcpoli) no site -->
<template>
  <v-app id="app">
    <!-- Renderiza o NavBar -->
    <NavBar />
    <!-- Renderiza o NavBarj apenas na rota '/JCPOLI' -->
    <NavBarj v-if="isSpecialRoute" />
    <notifications position="top right" />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import NavBarj from "@/components/NavBarj.vue";

export default {
  components: {
    NavBar,
    NavBarj
  },
  computed: {
  isSpecialRoute() {
    // Lista das rotas da JCPOLI para q o NavBar apareça
    const specialRoutes = ["/JCPOLI", "/escolaj", "/palestrasj", "/minicursosj", "/competicoesj", 
                           "/exposicoesj", "/anaisj"];
    // Verifica se a rota atual está na lista de rotas especiais
    return specialRoutes.includes(this.$route.path);
  }
}
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
