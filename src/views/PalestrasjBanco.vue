<template>
  <div>
    <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-150/500)*100vw + 67.304015296px)"
    ></PhotoHeader>

    <Main>
      <h4 class="text-center">Agenda</h4>
      <div class="courses-list">
        <div v-for="(palestra, index) in all_palestras" :key="index">
          <div class="palestra-info">
            <p><strong>Palestra:</strong> {{ palestra.title }}</p>
            <p><strong>Descrição:</strong> {{ palestra.desc }}</p>
            <p><strong>Palestrante:</strong> {{ palestra.instructor }}</p>
            <p><strong>Instituição:</strong> {{ palestra.institution }}</p>
            <p><strong>Local:</strong> {{ palestra.place }}</p>
            <p><strong>Data:</strong> {{ palestra.date }}</p>
            <hr />
          </div>
        </div>
      </div>
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhotoHeader from '../components/organization/PhotoHeader.vue';
import Main from '../components/organization/Main.vue';

// Importando a instância do aplicativo Firebase
import { app } from '@/firebaseDB';
import { getDatabase, ref, onValue } from "firebase/database";

@Component({
  components: {
    PhotoHeader,
    Main
  }
})
export default class PalestrasjBanco extends Vue {
  private all_palestras: Array<any> = [];

  private title = 'Palestras';
  private description = 'Palestras da jornada';
  private background = 'assets/img/slider/6.jpg';

  constructor() {
    super();
    this.loadPalestras();
  }

  mounted() {
    this.loadPalestras();
  }

  loadPalestras() {
    const db = getDatabase(app);
    const palestrasRef = ref(db, 'versao1/palestra_new');

    onValue(palestrasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.all_palestras = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
      }
    });
  }
}
</script>

<style scoped>
.courses-list > div:not(:first-child) {
  margin-top: 35px;
}

.palestra-info {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 2rem;
  background-color: whitesmoke;
  box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03),
    0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03),
    0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05),
    0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
  padding: 1rem;
  color: black;
}

h4 {
  color: black;
  margin-bottom: 3rem;
}
</style>
