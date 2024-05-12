<!-- Pagina da JCPOLI -  Pagina para Fotos implementada a partir da 3º edição da JCPOLI -->
<template>
    <div class="obs-page view">
      <Main>
        <Paragraph title="Fotos da III JCPOLI">
         Essa página dedica-se a guardar registros da 3º Edição da JCPOLI. 
         As palestras ocorridas entre os dias 11/04/2024 e 22/04/2024, 
         tanto no ambiente online ou presencialmente em nossos auditórios,
         foram registradas a seguir. Agradecemos a participação 
         de cada palestrante, professor e aluno, que fizeram parte de 
         mais edição da Jornada Cietífica da Escola Politécnica e de Artes.
        </Paragraph>
        <div class="gallery">
          <div
            class="gallery-panel"
            v-for="(photo, index) in photos"
            :key="index"
          >
            <img :src="photo" />
          </div>
        </div>
      </Main>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import PhotoHeader from '@/components/organization/PhotoHeader.vue'
  import Main from '@/components/organization/Main.vue'
  import Paragraph from '@/components/organization/Paragraph.vue'
  import HorizontalList from '@/components/organization/HorizontalList.vue'
  import Speakers from '@/components/organization/Speakers.vue'
  import Columns from '@/components/organization/Columns.vue'
  import Organization from '@/components/organization/Names3JCPOLI.vue'
  //import Supporters from '@/components/organization/Supporters.vue'
  //import { speakers_list } from '@/storage/programacao/speakers'
  
  @Component({
    components: {
      PhotoHeader,
      Main,
      HorizontalList,
      Paragraph,
      Speakers,
      Columns,
      Organization
      //Supporters
    }
  })
  export default class Escola extends Vue {
    private speakers: any = null
    private photos: any
  
    constructor() {
      super()
  
      this.photos = [
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0001.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0002.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0003.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0004.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0005.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0006.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0007.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0008.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0009.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0010.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0011.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0012.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0013.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0014.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0015.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0016.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0017.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0018.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0019.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0020.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0021.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0022.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0023.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0024.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0025.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0026.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0027.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0028.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0029.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0030.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0031.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0032.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0033.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0034.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0035.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0036.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0037.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0038.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0039.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0040.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0041.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0042.jpg',
        '/assets/img/jcpoli3/FOTOS_JCPOLI3_page-0043.jpg'
        ];
    }
  }
  </script>
  
  <style>
  html,
  body {
    margin: 0;
    padding: 0;
  }
  
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 2rem;
    margin: 4rem auto;
    padding-left: 5rem; /* Para deixar o grid de iamgens mais centralizado*/
  }
  
  .gallery-panel img {
    height: 15rem;
    width: 25rem;
  
    /* object-fit: cover; */
    object-fit: contain; /* Alterado de 'cover' para 'contain' */
    transform: scale(1.1);
    border-radius: 0.75rem;
  }
  
  @media screen and (min-width: 800px) {
    .gallery {
      grid-gap: 5rem;
    }
  
    .gallery-panel img {
      height: 25rem;
      width: 22rem;
  
      /* object-fit: cover; */
      object-fit: contain; /* Alterado de 'cover' para 'contain' */
      border-radius: 0.75rem;
  
      transition: transform 0.5s;
    }
  
    .gallery-panel img:hover {
      /* object-fit: contain; */
  
      transform: scale(1.5);
  
      padding: 2rem;
      border-radius: 2rem;
    }
  }
  </style>
  