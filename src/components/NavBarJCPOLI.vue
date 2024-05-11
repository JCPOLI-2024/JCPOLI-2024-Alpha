<!-- Página JCPOLI -Navbar para as abas da JCPOLI -->
<template>
  <div class="navbar-h mx-auto">

    <!-- Abas da JCPOLI de quando está está no mobile -->
    <!-- Por algum motivo não está funcionando essas abas no formato mobile por essa "NavBarJCPOLI" -->
    <!-- Assim, essa parte foi movida para a "NavBar" principal, e adicionada uma lógica para identificar quando está na rota JCPOLI -->
    <!-- <input type="checkbox" id="open-mmenu" :style="{ display: 'none' }" />
    <div class="mobile menu-mobile">
      <div>
        <dir>
          <label for="open-mmenu">
            <i class="fa fa-times"></i>
          </label>
        </dir>
      </div>
      <ul>
        <router-link to="/" tag="li">Home</router-link>
        <router-link :to="jcpoliLink" tag="li">Home</router-link>
        <router-link :to="escolaLink" tag="li">Escola</router-link>
        <router-link :to="palestrasLink" tag="li">Palestras</router-link>
        <router-link :to="minicursosLink" tag="li">Minicursos</router-link>
        <router-link :to="competicoesLink" tag="li">Competições</router-link>
        <router-link :to="exposicoesLink" tag="li">Exposições</router-link>
        <router-link :to="anaisLink" tag="li">Publicações</router-link>
        <router-link :to="orientacoesLink" tag="li">Orientações</router-link>
        <router-link to="/jges" tag="li">JGES</router-link>
        <router-link to="/Edicoes" tag="li">Edições</router-link>
      </ul>
    </div> -->
    <!-- Fim da parte de abas da JCPOLI de quando está está no mobile -->
    
    <!-- Antiga parte onde ficava a logo e data da JCPOLI -->
    <!-- <div class="nav-info">
      <div id="logo-nav-bar">
        <a href="/"><img id="logo" src="assets/img/logoj.png" style="width: 200px; height: auto;"> alt/></a>
        <span class="title"></span>
        <br />
        <span>
        </span>
      </div>
      <div class="nav-date">
        <span class="desktop" :style="{ textAlign: 'right' }">
          De 9 a 11 de Maio de 2022
          <br />PUC Goiás <br />Goiânia-GO
        </span>
        <span class="mobile sm-device">
          De 9 a 11 de Maio de 2022 PUC Goiás Goiânia-GO
        </span>
      </div>
      <div class="mobile">
        <label for="open-mmenu">
          <i class="fas fa-bars"></i>
        </label>
      </div>
    </div> -->

    <!-- Antiga parte onde ficava e data em cima da NavBarJCPOLI -->
    <!-- <div class="nav-info">
      <div class="nav-date">
        <span class="desktop" :style="{ textAlign: 'right' }">
           1º Edição - De 9 a 11 de Maio de 2022
          De 9 a 11 de Maio de 2022 
           De 9/05 a 11/05  
        </span>
        <span class="mobile sm-device">
          De 9 a 11 de Maio de 2022 PUC Goiás Goiânia-GO
        </span>
      </div>
      <div class="mobile">
        <label for="open-mmenu">
          <i class="fas fa-bars"></i>
        </label>
      </div>
    </div> -->

    <!-- Nova forma para exibir a data da edição atual da JCPOLI -->
      <div class="nav-info">
        <div class="nav-date">
          <span class="desktop" :style="{ textAlign: 'right' }">
            <!-- Exibe a data da edição atual da JCPOLI -->
            {{ getDataEdicaoAtual() }}
          </span>
          <!-- <span class="mobile sm-device">
            {{ getDataEdicaoAtual() }} PUC Goiás Goiânia-GO
          </span> -->
        </div>
        <div class="mobile">
          <label for="open-mmenu">
            <i class="fas fa-bars"></i>
          </label>
        </div>
      </div>
      <!-- Abas da JCPOLI de quando está não está no mobile -->
      <div class="nav-container desktop">
        <ul>
          <router-link :to="jcpoliLink" tag="li">Home</router-link>
          <router-link :to="escolaLink" tag="li">Escola</router-link>
          <router-link :to="palestrasLink" tag="li">Palestras</router-link>
          <router-link :to="minicursosLink" tag="li">Minicursos</router-link>
          <router-link :to="competicoesLink" tag="li">Competições</router-link>
          <router-link :to="exposicoesLink" tag="li">Exposições</router-link>
          <router-link :to="anaisLink" tag="li">Publicações</router-link>
          <router-link :to="orientacoesLink" tag="li">Orientações</router-link>
          <!-- <router-link to="/jges" tag="li">JGES</router-link> -->
          <router-link to="/Edicoes" tag="li">Edições</router-link>
        </ul>
      </div>
    <!-- imagem do amburguer -->
    <!-- <div id="barra-mobile" class="mobile"> 
        <label for="open-mmenu">
          <i class="fas fa-bars fa-3x"></i>
        </label>
    </div> -->

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { NavigationGuard } from 'vue-router'

@Component
export default class NavBarJCPOLI extends Vue {

  // private closeMenuOnRouteChange: NavigationGuard = (to, from, next) => {
  //   const checkbox = document.getElementById('open-mmenu') as HTMLInputElement
  //   if (checkbox.checked) {
  //     checkbox.checked = false
  //   }
  //   next()
  // }

  // created() {
  //   this.$router.beforeEach(this.closeMenuOnRouteChange)    
  // }

  // Para indentificar atraves do link em qual versão da JCPOLI tá
  get edicaoAtual() {
    // Obtém o caminho completo da rota atual
    const caminho = this.$route.fullPath;
    // Usa expressão regular para extrair o número da edição da rota
    const match = caminho.match(/\/JCPOLI(\d+)/);
    // Se houver uma correspondência, retorna o número da edição, caso contrário, retorna null
    return match ? parseInt(match[1]) : null;
  }

  // Método para formatar a data da edição atual da JCPOLI
  getDataEdicaoAtual() {
    const edicao = this.edicaoAtual;
    if (edicao === 1) {
      return "De 9 a 11 de Maio de 2022";
    } else if (edicao === 2) {
      return "De 8 a 10 de Maio de 2023";
    } else if (edicao === 3) {
      return "De 17 a 20 de Abril de 2024";
    } else {
      return ""; // Caso a edição não seja encontrada ou não esteja definida
    }
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
  max-width: 1300px;
}

.navbar-h .nav-info {
  color: #576574;
  /* display: flex;
  justify-content: space-between; */
  margin-bottom: 1px;
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
  margin-left: 81rem;
  margin-top: -1.5rem;
}
.navbar-h .nav-container {
  display: flex;
  justify-content: center;
}
.navbar-h .nav-container > ul {
  font-size: 14.2px;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 2px solid #576574;
}
.navbar-h .nav-container > ul li {
  position: relative;
  padding: 15px 38px;
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
