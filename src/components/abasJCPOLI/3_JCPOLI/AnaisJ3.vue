<!-- Pagina da JCPOLI - Pagina para Publicações/Anais da 3º JCPOLI-->
<template>
    <!--
    <div class="obs-page view">
      <PhotoHeader
        :title="title"
        :description="description"
        :image="background"
        offset="calc((-150/500)*100vw + 67.304015296px)"
      ></PhotoHeader>
      -->
  
      <Main>
  
         <!-- Integração do componente de Palestras -->
         <h3 class="style1">Apresentação dos artigos aprovados para a III JCPOLI</h3>
         <!--<div class="button-container">
          <button class="button" v-on:click="clearFilter">Todas as datas</button>
          <button class="button" v-on:click="filterPalestras">17/04</button>
          <button class="button" v-on:click="filterPalestras">18/04</button>
          <button class="button" v-on:click="filterPalestras">19/04</button>
        </div>
        -->
        <div class="courses-list">
          <div v-for="(props, index) in filtered_palestras" :key="'palestra_' + index">
            <div v-for="(course, index) in props.palestras" :key="'curso_' + index">
              <MiniCourse :course="course"></MiniCourse>
              <hr />
            </div>
          </div>
        </div>
        <!-- Fim da Integração do componente de Palestras -->
  
        <h3>Publicação de livro</h3>
        <table>
          <tbody>
            <tr>
              <th>Título</th>
              <th>Autor</th>
            </tr>
            <tr v-for="(props, index) in all_livros" :key="'livro_' + index">
              <td class="title">
                <a :href="props.path" target="_blank" class="text-justify">
                  {{ props.title }}
                </a>
              </td>
              <td class="autor">
                {{ props.autor }}
              </td>
            </tr>
          </tbody>
        </table>
        
        <h3>Anais da I JCPOLI</h3>
        <table>
          <tbody>
            <tr>
              <th>Título</th>
              <th>Autor</th>
            </tr>
            <tr v-for="(props, index) in all_anais2" :key="'anais2_' + index">
              <td class="title">
                <a :href="props.path" target="_blank" class="text-justify">
                  {{ props.title }}
                </a>
              </td>
              <td class="autor">
                {{ props.autor }}
              </td>
            </tr>
          </tbody>
        </table>
  
        <h3>Anais da II JCPOLI</h3>
        <table>
          <tbody>
            <tr>
              <th>Título</th>
              <th>Autor</th>
            </tr>
            <tr v-for="(props, index) in all_anais3" :key="'anais3_' + index">
              <td class="title">
                <a :href="props.path" target="_blank" class="text-justify">
                  {{ props.title }}
                </a>
              </td>
              <td class="autor">
                {{ props.autor }}
              </td>
            </tr>
          </tbody>
        </table>
  
        <h3>Anais da IV Jornada Científica da ECEC</h3>
        <table>
          <tbody>
            <tr>
              <th>Título</th>
              <th>Autor</th>
            </tr>
            <tr v-for="(props, index) in all_anais" :key="'anais_' + index">
              <td class="title">
                <a :href="props.path" target="_blank" class="text-justify">
                  {{ props.title }}
                </a>
              </td>
              <td class="autor">
                {{ props.autor }}
              </td>
            </tr>
          </tbody>
        </table>
      </Main>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import PhotoHeader from '@/components/organization/PhotoHeader.vue'
  import Main from '@/components/organization/Main.vue'
  import MiniCourse from '@/components/miniCourse/index.vue'
  import { Anais, Anais2, Anais3, livros } from '@/storage/programacao/3_JCPOLI/anais3JCPOLI'
  import { Palestras_Cursos } from '@/storage/programacao/3_JCPOLI/artigos_aprovados3JCPOLI'
  
  @Component({
    components: {
      PhotoHeader,
      Main,
      MiniCourse
    }
  })
  export default class IntegratedComponent extends Vue {
    private all_anais: any
    private all_anais2: any
    private all_anais3: any
    private all_livros: any
    private all_palestras: any
    private filtered_palestras: any
  
    private title = 'Anais'
    private description = 'Publicações e Palestras da JCPOLI'
    private background = '/assets/img/slider/6.jpg'
  
    filterPalestras(e) {
      let data = e.target.innerText
      this.filtered_palestras = this.all_palestras.map(item => {
        let palestras = item.palestras.filter(aux => {
          return aux.date == data
        })
        return { ...item, palestras }
      })
    }
  
    clearFilter() {
      this.filtered_palestras = this.all_palestras
    }
  
    constructor() {
      super()
  
      this.all_anais = Anais
      this.all_anais2 = Anais2
      this.all_anais3 = Anais3
      this.all_livros = livros
      this.all_palestras = Palestras_Cursos
      this.filtered_palestras = this.all_palestras
    }
  }
  </script>
  
  <style scoped>
  
  .style1 {
    color: black;
    text-transform: none !important;
    padding-bottom: 25px;
  }
  
  .main-title {
    color: black;
    margin-bottom: 3rem;
  }
  
  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 5rem;
  }
  
  .button {
    padding: 1rem;
    border: 0.1rem solid white;
    border-radius: 5rem;
    font-weight: 700;
    background-color: #006ca3;
    margin-right: 2rem;
    color: white;
    transition: all 0.2s ease-in-out;
  }
  
  .button:hover,
  .button:focus {
    background-color: #20407d;
    transform: scale(1.1);
  }
  
  @media screen and (max-width: 576px) {
    .button-container {
      flex-direction: column;
    }
    .button {
      margin-bottom: 1rem;
    }
  }
  
  @media screen and (min-width: 800px) {
    .button {
      width: 10.5rem;
    }
  }
  
  @media screen and (max-width: 425px) {
    .button {
      padding: 0.8rem;
    }
  }
  
  .courses-list > div:not(:first-child) {
    margin-top: 35px;
  }
  
  .section-course {
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    background-color: whitesmoke;
    box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03),
      0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03),
      0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05),
      0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
    padding: 1rem;
    color: black;
  }
  
  hr {
    border-top: 0.1rem solid #ddd;
  }
  
  @media screen and (max-width: 425px) {
    .section-course {
      font-size: 1.5rem;
    }
  }
  
  tr,
  a,
  td {
    font-size: 1.7rem;
    text-transform: uppercase;
  }
  
  th,
  td {
    padding: 0.5rem;
    text-align: left;
  }
  
  table {
    margin-top: 2rem;
    width: 60vw;
    margin-bottom: 8rem;
  }
  
  @media screen and (max-width: 425px) {
    a,
    tr {
      font-size: 0.8rem;
    }
  
    table {
      width: 90vw;
    }
  
    .autor {
      font-size: 0.9rem;
    }
  
  }
  
  
  </style>
  