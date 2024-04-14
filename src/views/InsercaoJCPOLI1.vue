<template>
  <div>
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
    <b-button type="button" variant="info" class="mr-2" @click="saveTask">Salvar</b-button>
  </div>
</template>

<script>
import { app } from '../firebaseDB';
import Vue from "vue"
import { getDatabase, ref, set, update } from "firebase/database";  

export default {
  data() {
    return {
      file1: null,
      databaseRef: '',
      palestras: []
    }
  },

  watch: {
    file1(newFile) {
      if (newFile) {
        const reader = new FileReader();

        reader.onload = (event) => {
          try {
            // Tenta parsear o conteúdo do arquivo
            const data = JSON.parse(event.target.result);

            // Extrai a referência ao banco de dados e as palestras
            this.databaseRef = data.databaseRef;
            this.palestras = data.palestras;
          } catch (error) {
            // Se um erro for lançado, exibe um toast com uma mensagem de erro
            this.makeErrorToast();
          }
        };
        // Lê o arquivo
        reader.readAsText(newFile);
      }
    },
  },

  methods: {
    saveTask() {
      const database = getDatabase(app);

      // Itera sobre cada palestra no arquivo
      this.palestras.forEach((palestra, index) => {
        // Insere a palestra no banco de dados
        set(ref(database, this.databaseRef + Date.now() + '_' + index), palestra)
          .then(() => {
            this.makeToast();
            this.$router.push({ name: 'ferramentas' });
          })
          .catch(error => {
            console.error("Erro ao salvar dados:", error);
          });
      });
    },

    makeToast() {
      const vm = new Vue();
      vm.$bvToast.toast('Dados salvos com sucesso', {
        title: 'Sucesso',
        autoHideDelay: 5000,
        variant: 'success'
      })
    },

    makeErrorToast() {
      const vm = new Vue();
      vm.$bvToast.toast('Erro ao ler o arquivo. Por favor, verifique se o arquivo está no formato JSON correto.', {
        title: 'Erro',
        autoHideDelay: 5000,
        variant: 'danger'
      })
    }
  }
}
</script>


<style>
</style>