<!-- Página JCPOLI -Navbar para as abas da JCPOLI -->
<template>
  <div class="navbar-h mx-auto">
    <!-- Abas da JCPOLI de quando está no mobile -->
    <input type="checkbox" id="open-mmenu" :style="{ display: 'none' }" />
    <div  class="mobile menu-mobile"> <!-- barra lateral -->
      <div>
        <dir>
          <label for="open-mmenu">
            <i class="fa fa-times"></i>
          </label>
        </dir>
      </div>
      <!-- Mostra as abas de quando está na 1º ou 2º JCPOLI -->
      <ul  v-if="!isSpecialRoute()">
        <router-link :to="jcpoliLink" tag="li">Home</router-link>
        <router-link :to="escolaLink" tag="li">Escola</router-link>
        <router-link :to="palestrasLink" tag="li">Palestras</router-link>
        <router-link :to="minicursosLink" tag="li">Minicursos</router-link>
        <router-link :to="competicoesLink" tag="li">Competições</router-link>
        <router-link :to="cienciaemcasaLink" tag="li">Ciência em Casa</router-link>
        <router-link :to="exposicoesLink" tag="li">Exposições</router-link>
        <router-link :to="anaisLink" tag="li">Publicações</router-link>
        <router-link :to="orientacoesLink" tag="li">Orientações</router-link>
        <router-link :to="fotosLink" tag="li">Fotos</router-link>
        <router-link :to="edicoesLink" tag="li">Edições</router-link>
      </ul>
      <!-- Mostra as abas de quando está na <3º JCPOLI -->
      <ul v-else>
        <router-link :to="jcpoliLink" tag="li">Home</router-link>
        <router-link :to="escolaLink" tag="li">Escola</router-link>
        <router-link :to="palestrasLink" tag="li">Palestras</router-link>
        <router-link :to="minicursosLink" tag="li">Minicursos</router-link>
        <router-link :to="competicoesLink" tag="li">Competições</router-link>
        <router-link :to="exposicoesLink" tag="li">Exposições</router-link>
        <router-link :to="anaisLink" tag="li">Publicações</router-link>
        <router-link :to="orientacoesLink" tag="li">Orientações</router-link>
        <router-link :to="edicoesLink" tag="li">Edições</router-link>
      </ul>
    </div>
    <!-- Nova forma para exibir a logo e data da edição atual da JCPOLI -->
    <div class="nav-info">
      <div id="logo">
        <a href="/JCPOLI3">
          <img id="logo" src="/assets/img/logoJCPOLI.png" style="width: 270px; left: 30px; height: auto; position: absolute; float: right; top: -35px; ">
        </a>
        <span class="title"></span>
        <br />
        <span>
        </span>
      </div>
      <div class="nav-date">
        <span class="desktop" :style="{ textAlign: 'right' }">
          <!-- Exibe a data da edição atual da JCPOLI -->
          {{ getDataEdicaoAtual() }}
          <br />PUC Goiás <br />Goiânia-GO
        </span>
        <span class="mobile sm-device">
          {{ getDataEdicaoAtual() }} PUC Goiás Goiânia-GO
        </span>
      </div>
      <div class="mobile">
        <label for="open-mmenu">
          <i class="fas fa-bars"></i>
        </label>
      </div>
    </div>
    <!-- Abas da JCPOLI de quando está no desktop -->
    <div class="nav-container desktop">
      <!-- Mostra as abas de quando está na 1º ou 2º JCPOLI -->
      <ul  v-if="!isSpecialRoute()">
        <router-link :to="jcpoliLink" tag="li">Home</router-link>
        <router-link :to="escolaLink" tag="li">Escola</router-link>
        <router-link :to="palestrasLink" tag="li">Palestras</router-link>
        <router-link :to="minicursosLink" tag="li">Minicursos</router-link>
        <router-link :to="competicoesLink" tag="li">Competições</router-link>
        <router-link :to="cienciaemcasaLink" tag="li">Ciência em Casa</router-link>
        <router-link :to="exposicoesLink" tag="li">Exposições</router-link>
        <router-link :to="anaisLink" tag="li">Publicações</router-link>
        <router-link :to="orientacoesLink" tag="li">Orientações</router-link>
        <router-link :to="fotosLink" tag="li">Fotos</router-link>
        <router-link :to="edicoesLink" tag="li">Edições</router-link>
      </ul>
      <!-- Mostra as abas de quando está na <3º JCPOLI -->
      <ul v-else>
        <router-link :to="jcpoliLink" tag="li">Home</router-link>
        <router-link :to="escolaLink" tag="li">Escola</router-link>
        <router-link :to="palestrasLink" tag="li">Palestras</router-link>
        <router-link :to="minicursosLink" tag="li">Minicursos</router-link>
        <router-link :to="competicoesLink" tag="li">Competições</router-link>
        <router-link :to="exposicoesLink" tag="li">Exposições</router-link>
        <router-link :to="anaisLink" tag="li">Publicações</router-link>
        <router-link :to="orientacoesLink" tag="li">Orientações</router-link>
        <router-link :to="edicoesLink" tag="li">Edições</router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Programacao from '@/views/Programacao.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { NavigationGuard } from 'vue-router'

@Component
export default class NavBar extends Vue {
  private closeMenuOnRouteChange: NavigationGuard = (to, from, next) => {
    const checkbox = document.getElementById('open-mmenu') as HTMLInputElement
    if (checkbox.checked) {
      checkbox.checked = false
    }
    next()
  }
  // Pra poder pegar a ultima edição da JCPOLI
  get jcpoliUltimaEdicaoLink() {
    // Defina aqui a lógica para determinar a última edição da JCPOLI
    const ultimaEdicao = 3; // Por exemplo, assumindo que a última edição é a edição 3
    return `/JCPOLI${ultimaEdicao}`;
  }

  // Método para formatar a data da edição atual da JCPOLI
  getDataEdicaoAtual() {
    const edicao = this.edicaoAtual;
    if (edicao === 1) {
      return "De 9 a 11 de Maio de 2022"; // 1º Edição
    } else if (edicao === 2) {
      return "De 8 a 10 de Maio de 2023"; // 2º Edição
    } else if (edicao === 3) {
      return "De 17 a 20 de Abril de 2024"; // 3º Edição
    } else {
      return ""; // Caso a edição não seja encontrada ou não esteja definida
    }
  }
  
  // Pra poder identificar se está na rota é a 1º ou 2º JCPOLI
  isSpecialRoute() {
    // Verifica se a rota atual está relacionada à JCPOLI1 ou JCPOLI2
    return this.$route.path.startsWith("/JCPOLI1") || this.$route.path.startsWith("/JCPOLI2");
  }

   // A partir daqui é toda a lógica para poder ter as lógicas das rotas JCPOLI:Edição/"aba"

  // Para indentificar atraves do link em qual versão da JCPOLI tá
  get edicaoAtual() {
    // Obtém o caminho completo da rota atual
    const caminho = this.$route.fullPath;
    // Usa expressão regular para extrair o número da edição da rota
    const match = caminho.match(/\/JCPOLI(\d+)/);
    // Se houver uma correspondência, retorna o número da edição, caso contrário, retorna null
    return match ? parseInt(match[1]) : null;
  }
   
  // Método para construir o link para a Home da JCPOLI
  get jcpoliLink() {
    return `/JCPOLI${this.edicaoAtual}`;
  }
  // Método para construir o link para a Escola da edição atual da JCPOLI
  get escolaLink() {
    return `/JCPOLI${this.edicaoAtual}/Escola`;
  }
  // Método para construir o link para as Palestras da edição atual da JCPOLI
  get palestrasLink() {
    return `/JCPOLI${this.edicaoAtual}/Palestras`;
  }
  // Método para construir o link para a Minicursos da edição atual da JCPOLI
   get minicursosLink() {
     return `/JCPOLI${this.edicaoAtual}/Minicursos`;
   }
  // Método para construir o link para a Competicoes da edição atual da JCPOLI
   get competicoesLink() {
     return `/JCPOLI${this.edicaoAtual}/Competicoes`;
   }
   // Método para construir o link para a Ciencia Em Casa a partir da 3º edição JCPOLI
   get cienciaemcasaLink() {
     return `/JCPOLI${this.edicaoAtual}/CienciaEmCasa`;
   }
  // Método para construir o link para a Exposicoes da edição atual da JCPOLI
   get exposicoesLink() {
     return `/JCPOLI${this.edicaoAtual}/Exposicoes`;
   }
  // Método para construir o link para a Anais da edição atual da JCPOLI
   get anaisLink() {
     return `/JCPOLI${this.edicaoAtual}/Anais`;
   }
  // Método para construir o link para a Orientacoes da edição atual da JCPOLI
   get orientacoesLink() {
     return `/JCPOLI${this.edicaoAtual}/Orientacoes`;
   }
   // Método para construir o link para as Fotos a partir da 3º edição JCPOLI
   get fotosLink() {
     return `/JCPOLI${this.edicaoAtual}/Fotos`;
   }
   // Método para construir o link para página de Edicoes JCPOLI
   get edicoesLink() {
     return `/JCPOLI${this.edicaoAtual}/Edicoes`;
   }
  // Termino toda a lógica para poder mostrar as abas epecificas da JCPOLI no formato mobile

  created() {
    this.$router.beforeEach(this.closeMenuOnRouteChange)    
  }
  
  mounted() {    
    window.addEventListener("resize", this.centralizar);
    setTimeout(this.centralizar, 300);
  }

  centralizar () {
    
    const logo    = document.getElementsByClassName('logo')[0];        
    const navBar  = document.getElementsByClassName('titulo-e-nav')[0];

    const largura_body    = window.innerWidth;
    const margin_logo     = parseInt(window.getComputedStyle(logo).marginRight);
    const largura_logo    = parseInt(window.getComputedStyle(logo).width);
    const largura_navBar  = parseInt(window.getComputedStyle(navBar).width);
        
    let largura_espacador = Math.floor((largura_body - largura_navBar) / 2);
    largura_espacador    -= largura_logo + margin_logo;

    const espacador       = document.getElementById('espacador');
    espacador.style.width = largura_espacador + "px";                
  }

  // Rascunho para uma futura possivel dropdown na parte de abas
  // data() {
  //   return {
  //     showDropdown: false // Variável para controlar a exibição do dropdown
  //   };
  // }


}
</script>
<style scoped>
#logo {
  left: -6rem;
  height: 5rem;
  top: -0.5rem;
}

#logo-nav-bar {
  text-align: left;
}

.navbar-h {
  position: relative;
  padding: 20px 0;
  background-color: white;
  max-width: 2000px;
}

.navbar-h .nav-info {
  color: #576574;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.navbar-h .nav-info img {
  position: absolute;
  height: 113px;
  left: -80px;
}
.navbar-h .nav-info .title {
  font-size: 30px;
}
.navbar-h .nav-info > div {
  position: relative;
}
.navbar-h .nav-info > div:nth-child(2) {
  text-align: left;
}
.navbar-h .nav-info > div:last-child {
  text-align: right;
}
.navbar-h .nav-info span,
.navbar-h .nav-info p,
.navbar-h .nav-info h1,
.navbar-h .nav-info h2,
.navbar-h .nav-info h3 {
  color: inherit;
}
.navbar-h .nav-date {
  font-style: italic;
  font-size: smaller;
  display: flex;
  align-items: flex-end;
}
.navbar-h .nav-container {
  display: flex;
  justify-content: center;
}
.navbar-h .nav-container > ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 2px solid #576574;
}
/* padding que altera as dimensões dentro da navbar */
.navbar-h .nav-container > ul li {
  position: relative;
  padding: 15px 18px;
  font-family: 'Montserrat', sans-serif;
  color: #576574;
  transition: all 50ms ease;
  height: 51px;
}
.navbar-h .nav-container > ul li:hover {
  border-bottom: 2px solid #576574;
  cursor: pointer;
}
.navbar-h .nav-container > ul li a {
  color: inherit;
}
.navbar-h .nav-container > ul li a:link {
  color: inherit;
  text-decoration: none;
}
.navbar-h .nav-container > ul li a:active {
  text-decoration: none;
}
.navbar-h .nav-container > ul li a:visited {
  text-decoration: none;
}
.navbar-h .nav-container > ul li a:hover {
  border: none;
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  .navbar-h {
    position: unset;
    padding: 10px 0;
    margin: 0 15px;
  }
  .navbar-h .nav-info {
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 'lg t1 mn' 'lg t2 mn';
  }
  .navbar-h .nav-info label {
    margin: 0;
  }
  .navbar-h .nav-info img {
    grid-area: lg;
    position: unset;
    left: unset;
    height: 90px;
    margin-right: 22px;
  }
  .navbar-h .nav-info > div {
    grid-area: t1;
  }
  .navbar-h .nav-info > div:last-child {
    grid-area: mn;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22pt;
  }
  .navbar-h .nav-info > div:last-child i {
    margin: 15px;
  }
  .navbar-h .nav-info .nav-date {
    grid-area: t2;
  }
}
@media screen and (max-width: 425px) {
  .navbar-h .nav-info > div:last-child i {
    margin: 5px;
  }
}
@media screen and (max-width: 375px) {
  .navbar-h .nav-info span {
    font-size: 12px;
    text-align: left;
  }
}
@media screen and (max-width: 320px) {
  .navbar-h {
    margin: 0 5px;
  }
  .navbar-h .nav-info img {
    margin-right: 10px;
  }
}

#open-mmenu:checked + div {
  right: 0;
}

.menu-mobile {
  position: fixed;
  z-index: 1000;
  background-color: white;
  padding: 15px;
  top: 0;
  right: -100%;
  bottom: 0;
  box-shadow: -2px -2px 16px;
  transition: right 800ms ease-in-out;
}
.menu-mobile ul {
  padding: 0;
  margin: 0;
}
.menu-mobile ul li {
  padding: 15px;
}
.menu-mobile > div {
  display: flex;
  justify-content: flex-end;
}
.menu-mobile > div i {
  margin: 15px;
}
.menu-mobile a {
  color: inherit;
}
.menu-mobile a:link {
  color: inherit;
  text-decoration: none;
}
.menu-mobile a:active {
  text-decoration: none;
}
.menu-mobile a:visited {
  text-decoration: none;
}
.menu-mobile a:hover {
  border: none;
  text-decoration: none;
}

@media screen and (min-width: 769px) {
  .mobile {
    display: none !important;
  }
}
@media screen and (max-width: 768px) {
  .desktop {
    display: none !important;
  }
}
@media screen and (max-width: 425px) {
  .lg-device {
    display: none !important;
  }
}
@media screen and (max-width: 375px) {
  .md-device {
    display: none !important;
  }
}
@media screen and (max-width: 320px) {
  .sm-device {
    display: none !important;
  }
}
</style>
