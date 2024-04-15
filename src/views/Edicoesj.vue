<template>
    <v-layout column wrap class="jcecec-slider">
      <v-flex xs12>
        <v-carousel hide-controls hide-delimiters height="1300">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            hide-controls
          >
            <v-container fill-height class="d-flex flex-column">
                
                <!-- 1º Edição -->
                <router-link :to="jcpoliLink(1)" class="banner">
                  <div>
                    <div>
                      <span class="date">09 a 11 de Maio de 2022</span>
                    </div>
                    <hr />
                    <div>
                      <span class="jcecec">I JCPOLI</span>
                    </div>
                    <div>
                      <span class="jcecec-sub">
                        Jornada Científica da Escola Politécnica
                      </span>
                    </div>
                    <hr />
                    <div>
                      <span id="description">CULTURA, INOVAÇÃO e EMPREENDEDORISMO</span>
                    </div>
                  </div>
                </router-link>
                
                <!-- 2º Edição -->
                <router-link :to="jcpoliLink(2)" class="banner">
                  <div>
                    <div>
                      <span class="date">08 a 10 de Maio de 2023</span>
                    </div>
                    <hr />
                    <div>
                      <span class="jcecec">II JCPOLI</span>
                    </div>
                    <div>
                      <span class="jcecec-sub">
                        Jornada Científica da Escola Politécnica e de Artes
                      </span>
                    </div>
                    <hr />
                    <div>
                      <span id="description">
                        O uso da Inteligência Artificial e suas tecnologias para a melhoria da qualidade de vida
                      </span>
                    </div>
                  </div>
                </router-link>

                <!-- 3º Edição -->
                <router-link :to="jcpoliLink(3)" class="banner">
                  <div>
                    <div>
                      <span class="date">17 a 20 de Maio de 2024</span>
                    </div>
                    <hr />
                    <div>
                      <span class="jcecec">III JCPOLI</span>
                    </div>
                    <div>
                      <span class="jcecec-sub">
                        Jornada Científica da Escola Politécnica e de Artes
                      </span>
                    </div>
                    <hr />
                    <div>
                      <span id="description">
                       Inovações Tecnológicas para o desenvolvimento humano integral
                      </span>
                    </div>
                  </div>
                </router-link>
                

            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  
  @Component
  export default class Carousel extends Vue {
    private items: any
  
    constructor() {
      super()
  
      this.items = [
        { src: '/assets/img/slider/3.jpeg' },
      ]
    }

    // Método para construir o link para cada edição da JCPOLI
    jcpoliLink(edicao: number) {
      return edicao >= 1 ? `/JCPOLI${edicao}` : '/JCPOLI';
    }
  }
  </script>
  
  <style scoped>
  .banner {
    display: flex;
    opacity: 0.8;
    background-color: white;
    color: #fff;
    position: relative;
    padding: 5rem 2rem 2rem 3rem;
    justify-content: center;
    text-align: center;
    margin-bottom: 40px; /* Espaçamento entre os banners */
    width: 490px; /* Defina o tamanho máximo para o banner */
    max-height: 370px;
  }
  
  @media screen and (max-width: 576px) {
    .banner {
      padding: 30px 5px;
    }
  }
  
  .banner span {
    text-align: center;
  }
  
  #description {
    letter-spacing: 3px;
  }
  
  .jcecec {
    text-transform: uppercase;
    font-size: 5em;
    font-weight: 300;
  }
  
  .jcecec-sub {
    font-size: 0.9em;
  }
  
  #logo {
    width: 6rem;
  }
  
  #cienciaemcasa {
    width: 8rem;
  }
  
  hr {
    border: 1px solid black;
  }
  
  .date {
    font-weight: bold;
  }
  
  span {
    color: black;
    font-weight: normal;
  }
  
  @media only screen and (max-width: 760px) {
    .jcecec-slider {
      display: none;
    }
  }
  </style>
  