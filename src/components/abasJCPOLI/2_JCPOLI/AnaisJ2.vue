<!-- Pagina da JCPOLI - Pagina para Publicações/Anais da 2º JCPOLI-->
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
import { app } from '@/firebaseDB'; // Ensure you have Firebase initialized correctly
import { getDatabase, ref, onValue } from "firebase/database";

@Component({
  components: {
    Main
  }
})
export default class AnaisJ2 extends Vue {
  private all_anais: Array<any> = [];
  private title = 'Anais';

  mounted() {
    this.loadAnais();
  }

  async loadAnais() {
    const db = getDatabase(app); // Assuming 'app' is the Firebase app instance
    const paths = [
      'versao2/anais/Anais',
      'versao2/anais/Anais2',
      'versao2/anais/Anais3',
      'versao2/anais/livros'
    ];

    const promises = paths.map(path => {
      return new Promise((resolve, reject) => {
        const anaisRef = ref(db, path);
        onValue(anaisRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            resolve(Object.keys(data).map(key => ({
              id: key,
              ...data[key],
            })));
          } else {
            resolve([]);
          }
        }, (error) => {
          reject(error);
        });
      });
    });

    try {
      const results = await Promise.all(promises);
      this.all_anais = results.flat();
      console.log('Anais loaded:', this.all_anais); // Debug log
    } catch (error) {
      console.error('Error loading anais:', error); // Debug log
    }
  }
}
</script>

<style scoped>
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
