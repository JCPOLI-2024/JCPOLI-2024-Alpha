<template>
  <div class="navbar-h">
  <!-- Rascunho para uma futura possivel dropdown na parte de abas -->
  <!-- <div class="navbar-h mx-auto"> -->

    <input type="checkbox" id="open-mmenu" :style="{ display: 'none' }" />

    <div class="mobile menu-mobile"> <!-- barra lateral -->
      <div>
        <dir>
          <label for="open-mmenu">
            <i class="fa fa-times"></i>
          </label>
        </dir>
      </div>
      <ul>
        <router-link to="/" tag="li">Home</router-link>  
        <router-link to="/hackathon" tag="li">Hackathon</router-link>
        <router-link to="/manutencao" tag="li">Desafios</router-link>
        <router-link to="/TCC" tag="li">TCC</router-link>
      </ul>
    </div>

    <div class="logo">
      <a href="/">
        <img src="assets/img/Poli_azul.png" alt="logo da puc">
      </a>
    </div>
    
    <div id="espacador">
      
    </div>

    <div class="titulo-e-nav">      
      <p>Pontifícia Universidade Católica de Goiás</p>
      <div class="nav-container desktop">
      <ul>
        <router-link to="/" tag="li">Home</router-link>  
        <router-link to="/hackathon" tag="li">Hackathon</router-link>
        <router-link to="/manutencao" tag="li">Desafio CD</router-link>
        <router-link to="/TCC" tag="li">TCC</router-link>
        <!-- <router-link to="/JCPOLI" tag="li">JCPOLI</router-link> -->
        <router-link :to="jcpoliUltimaEdicaoLink" tag="li">JCPOLI</router-link>

        <!-- Rascunho para uma futura possivel dropdown na parte de abas -->
        <!-- <li class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          JCPOLI III
          <ul v-if="showDropdown" class="dropdown-content">
            <router-link to="/JCPOLI" tag="li">Home</router-link>
            <router-link to="/escolaj" tag="li">Escola</router-link>
            <router-link to="/palestrasj" tag="li">Palestras</router-link>
            <router-link to="/minicursosj" tag="li">Minicursos</router-link>
            <router-link to="/competicoesj" tag="li">Competições</router-link>
            <router-link to="/exposicoesj" tag="li">Exposições</router-link>
            <router-link to="/anaisj" tag="li">Publicações</router-link>
          </ul>
        </li> -->
      
      </ul>
      </div>
    </div>

    <!-- Nova posição da logo da JCPOLI -->
    <!-- <div class="logo-jcpoli"> -->
    <div class="logo-jcpoli">
      <a href="/JCPOLI">
        <!-- <img src="assets/img/logoj.png" alt="logo da puc" style=" transform: scale(1.1, 1.1); max-width: 356px; height: 108px;  margin-left: 4rem; position: absolute;"> -->
        <img src="assets/img/logoJCPOLI.png" alt="logo da puc">
      </a>
    </div>
    
    <div id="barra-mobile" class="mobile"> <!-- imagem do amburguer -->
        <label for="open-mmenu">
          <i class="fas fa-bars fa-3x"></i>
        </label>
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

  get jcpoliUltimaEdicaoLink() {
    // Defina aqui a lógica para determinar a última edição da JCPOLI
    const ultimaEdicao = 3; // Por exemplo, assumindo que a última edição é a edição 3
    return `/JCPOLI${ultimaEdicao}`;
  }

  created() {
    this.$router.beforeEach(this.closeMenuOnRouteChange)    
  }
  // Rascunho para uma futura possivel dropdown na parte de abas
  // data() {
  //   return {
  //     showDropdown: false // Variável para controlar a exibição do dropdown
  //   };
  // }
  
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



}
</script>

<style scoped>



.navbar-h {
  position: relative;
  padding: 20px 0;
  padding-left: 10px;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: baseline;
}

.titulo-e-nav p {
  font-size: 1.5rem;
  margin-bottom: 0px;
  
}

.logo {
  margin-right: 1rem;
}

.logo-jcpoli {

  /* 1º Opção de tamanho de logo sem posição absoluta (logo pequena)*/
  /* transform: scale(0.25, 0.25);
  max-width: 30px;
  height: 0px;
  top: 0rem;
  margin-right: 18rem;
  margin-left: auto;
  margin-top: -1.5rem; */

   /* 2º Opção de tamanho de logo (maior que a ultima logo, ou seja, mais visivel o letreiro)*/
  transform: scale(0.251, 0.26);
  max-width: 16px;
  height: 0px;
  top: 0rem;
  margin-right: 19rem;
  margin-left: auto;
  margin-top: -1.8rem;
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
.navbar-h .nav-container > ul li {
  position: relative;
  padding: 15px 45px;
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
  }  

  #barra-mobile {
    left: 150px;
  }
}

@media screen and (max-width: 570px) {
  #barra-mobile {
    left: 100px;
  }
}

@media screen and (max-width: 533px) {  
  .titulo-e-nav {
    display: none;
  }
}

@media screen and (max-width: 455px) {
  #barra-mobile {
    left: 50px;
  }
}


@media screen and (max-width: 375px) {
  #barra-mobile {
    left: 20px;
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
  list-style-type: none;
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

/* Rascunho para uma futura possivel dropdown na parte de abas */
/* Estilos para o dropdown */
/*
.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 0;
}

.dropdown-content li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: inline-block; /* Exibir as abas na horizontal 
}

.dropdown-content li:hover {
  background-color: #f1f1f1;
}

/* Mostra o dropdown quando o mouse está sobre a aba "JCPOLI" 
.nav-container.desktop .dropdown:hover .dropdown-content {
  display: block;
}
*/

@media screen and (min-width: 926px) {
  .mobile {
    display: none !important;
  }
}

@media screen and (max-width: 925px) {
  .desktop {
    display: none !important;
  }
  .navbar-h {
    justify-content: space-between;
    padding-right: 1rem;
  }

  #barra-mobile {
    display: flex;
    justify-content: center; /* Alinhar horizontalmente ao centro */
    align-items: center;    
  }


}

@media screen and (max-width: 356px) {

  .logo {
    margin-right: 0px;
  }


}

@media screen and (max-width: 341px) {


  .logo, .logo img {
    transform: scale(0.9, 0.9);
  }

  .logo {
    margin-left: -1rem;
  }

  #barra-mobile {
    margin-left: -8rem;
  }
  

}

@media screen and (max-width: 328px) {

  .logo a {
    right: 2rem;
  }

  #barra-mobile {
    z-index: 1;
  }
}

@media screen and (max-width: 320px) {

  #barra-mobile {
    left: 90px;
  }
}

</style>
