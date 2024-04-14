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
// Referencia obtida de firebaseDB.js
import { app } from '../firebaseDB';
import Vue from "vue"
// Referencia para metodos do firebase que serao utilizados abaixo para operacoes de inclusao
import { getDatabase, ref, set, update } from "firebase/database";  

//Criacao do array de dados para segurar os dados do arquivo txt
export default {
  data() {
    return {
      file1: null, // arquivo
      databaseRef: '', // referencia para o caminho que os dados deverao ser salvos dentro do banco 
      dados: [] // colecao dos dados (cada tupla do JSON)
    }
  },

  // Watch e usado porque na mudanca dos atributos ele aplica os dados
  // nesse caso quando o arquivo e inserido ele verifica se os valores de file1 foram alterados se sim preenche os dados
  watch: {
    file1(newFile) {
      if (newFile) {
        const reader = new FileReader(); //inicia o driver de leitura do arquivo txt

        reader.onload = (event) => {
          try {
            // Tenta parsear o conteúdo do arquivo
            const data = JSON.parse(event.target.result);

            // Extrai a referência ao banco de dados e os dados
            this.databaseRef = data.databaseRef;
            this.dados = data.dados;
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
    // Salvamento (inclusao dos dados no banco)
    saveTask() {
      const database = getDatabase(app);

      // Itera sobre cada dado extraido do arquivo
      this.dados.forEach((dado, index) => {
        // Insere os dados no banco de dados usando o metodo set() do firebase
        set(ref(database, this.databaseRef + Date.now() + '_' + index), dado)
          .then(() => {
            this.makeToast(); // solta o popup bonitinho avisando que foi salvo com sucesso
            this.$router.push({ name: 'leituraEManipulacaoDB' }); // redireciona automaticamente para a aba de vizualizacao dos dados
          })
          .catch(error => {
            console.error("Erro ao salvar dados:", error);
          });
      });
    },

    // funcao para o popup bonitinho de salvamento .... 
    makeToast() {
      const vm = new Vue();
      vm.$bvToast.toast('Dados salvos com sucesso', {
        title: 'Sucesso',
        autoHideDelay: 5000,
        variant: 'success'
      })
    },
    // solta um popup de erro caso o seu arquivo JSON nao esteje corretamente formatado
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