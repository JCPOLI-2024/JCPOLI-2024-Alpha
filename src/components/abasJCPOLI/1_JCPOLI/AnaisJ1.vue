<!-- Pagina da JCPOLI - Pagina para Publicações/Anais da 1º JCPOLI-->
<template>
  <div class="obs-page view">
    <Main>
      <h3>Anais da IV Jornada Científica da ECEC</h3>
      <table>
        <tbody>
          <tr>
            <th>Título</th>
            <th>Autor</th>
          </tr>
          <tr v-for="(props, index) in all_anais" :key="index">
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
import { Component, Vue } from 'vue-property-decorator';
import Main from '@/components/organization/Main.vue';
import { app } from '@/firebaseDB';
import { getDatabase, ref, onValue } from "firebase/database";

@Component({
  components: {
    Main
  }
})
export default class AnaisJ1 extends Vue {
  private all_anais: Array<any> = [];
  private title = 'Anais';

  constructor() {
    super();
    this.loadAnais();
  }

  mounted() {
    this.loadAnais();
  }

  loadAnais() {
    const db = getDatabase(app);
    const anaisRef = ref(db, 'versao1/anais');

    onValue(anaisRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.all_anais = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        console.log('Anais loaded:', this.all_anais); // Debug log
      } else {
        console.log('No data found in Firebase'); // Debug log
      }
    }, (error) => {
      console.error('Error loading anais:', error); // Debug log
    });
  }
}
</script>
  
  <style scoped>
  tr,
  a,
  td {
    font-size: 1.3rem;
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