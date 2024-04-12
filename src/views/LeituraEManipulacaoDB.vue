<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="col-6 mt-2" v-for="palestra in palestras" :key="palestra.id">
        <b-card :title="palestra.date + ' - ' + palestra.time">
          <b-card-text>
            Palestra: {{ palestra.description }}<br>
            Local: {{ palestra.place }}<br>
            Palestrante: {{ palestra.speaker }}
          </b-card-text>

          <b-button variant="info" class="mr-2" @click="editPalestra(palestra)">Editar</b-button>
          <b-button variant="danger" class="mr-2" @click="deletePalestra(palestra)">Excluir</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue, remove } from "firebase/database";

export default {
  data() {
    return {
      palestras: [],
    };
  },

  mounted() {
    const db = getDatabase();
    const palestrasRef = ref(db, 'versao1/palestras');

    onValue(palestrasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.palestras = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
      }
    });
  },

  methods: {
    editPalestra(palestra) {
      this.$router.push({ name: 'form', params: { palestra: palestra } });
    },

    deletePalestra(palestra) {
      const db = getDatabase();
      remove(ref(db, 'versao1/palestras/' + palestra.id))
        .then(() => {
          console.log("Palestra removida com sucesso");
        })
        .catch((error) => {
          console.error("Erro ao remover palestra:", error);
        });
    },
  }
};
</script>


<style>

</style>
