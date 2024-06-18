<!-- Pagina da JCPOLI - Pagina para Palestras da 3º JCPOLI -->
<!-- Mantive a mesma o mesmo padrão de css que já estava aqui na Escola Politecna e de Artes, mas as palestras são as que estavam na JCPOLI -->
<template>
  <div>
    <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-150/500)*100vw + 67.304015296px)"
    ></PhotoHeader>

    <Main>
      <h4 class="text-center">Agenda 1º JCPOLI</h4>
      <div class="button-container">
        <button class="button" @click="clearFilter">Todas as datas</button>
        <button class="button" @click="filterPalestras('17/04')">17/04</button>
        <button class="button" @click="filterPalestras('18/04')">18/04</button>
        <button class="button" @click="filterPalestras('19/04')">19/04</button>
      </div>
      <div class="courses-list">
        <div v-for="(palestra, index) in filtered_palestras" :key="index">
          <MiniCourse :course="palestra"></MiniCourse>
          <hr />
        </div>
      </div>
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhotoHeader from '@/components/organization/PhotoHeader.vue';
import Main from '@/components/organization/Main.vue';
import MiniCourse from '@/components/miniCourse/index.vue';
import { app } from '@/firebaseDB';
import { getDatabase, ref, onValue } from "firebase/database";

@Component({
  components: {
    PhotoHeader,
    Main,
    MiniCourse
  }
})
export default class PalestrasJ1 extends Vue {
  private all_palestras: Array<any> = [];
  private filtered_palestras: Array<any> = [];
  private title = 'Palestras';
  private description = 'Palestras da jornada';
  private background = '/assets/img/slider/6.jpg';

  constructor() {
    super();
    this.loadPalestras();
  }

  mounted() {
    this.loadPalestras();
  }

  loadPalestras() {
    const db = getDatabase(app);
    const palestrasRef = ref(db, 'versao3/palestras_new');

    onValue(palestrasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.all_palestras = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        this.filtered_palestras = this.all_palestras;
        console.log('Palestras loaded:', this.all_palestras); // Debug log
      } else {
        console.log('No data found in Firebase'); // Debug log
      }
    }, (error) => {
      console.error('Error loading palestras:', error); // Debug log
    });
  }

  filterPalestras(date: string) {
    this.filtered_palestras = this.all_palestras.filter(palestra => palestra.date === date);
    console.log('Filtered palestras:', this.filtered_palestras); // Debug log
  }

  clearFilter() {
    this.filtered_palestras = this.all_palestras;
    console.log('Cleared filter, showing all palestras:', this.filtered_palestras); // Debug log
  }
}
  </script>
  
  <style scoped>
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
  
  .button:hover {
    background-color: #20407d;
    transform: background-color;
    transform: scale(1.1);
  }
  
  .button:focus {
    background-color: #20407d;
    transform: background-color;
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
  
  h4 {
    color: black;
    margin-bottom: 3rem;
  }
  </style>
  