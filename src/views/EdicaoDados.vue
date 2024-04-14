<!--
Este é um componente Vue que serve para criar ou editar itens em um banco de 
dados Firebase Realtime Database.

+ Template: A parte do template contém um formulário para inserir ou editar um item. 
O formulário é dinâmico, criando um campo de entrada para cada propriedade do item. 
Também tem botões para salvar o item ou limpar o formulário.

+ Data: A função data retorna o estado inicial do componente. Isso inclui o objeto 
do formulário (form) que armazena os dados do item e a referência ao banco de dados 
onde o item será salvo (databaseRef).

+ Watch: A opção watch observa mudanças nos parâmetros da rota. Quando o item ou a 
referência ao banco de dados da rota muda, ele atualiza o formulário ou a referência 
ao banco de dados, respectivamente.

+ Methods: A opção methods contém várias funções:
  - saveTask: Esta função é chamada quando o botão “Salvar” é clicado. Ela verifica 
    se um item foi passado pela rota. Se sim, atualiza o item existente. Se não, cria um novo item.
  - clearForm: Esta função limpa o formulário, redefinindo o objeto do formulário 
    para um objeto vazio.
  - makeToast: Esta função exibe uma notificação de sucesso quando o item é salvo com sucesso.

-->
<template>
  <div>
    <!-- Formulário para inserir ou editar um item -->
    <b-form class="mt-2">
      <b-row>
        <!-- Loop através de cada campo do formulário -->
        <b-col class="col-6 offset-sm-3" v-for="(value, key) in form" :key="key">
          <!-- Grupo de formulário para cada campo -->
          <b-form-group :label="key + ':'" :label-for="key">
            <!-- Campo de entrada para cada campo -->
            <b-form-input :id="key" v-model="form[key]" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
        <!-- Botões para salvar e limpar o formulário -->
        <b-col class="col-6 offset-sm-3">
          <b-button type="button" variant="info" class="mr-2" @click="saveTask">Salvar</b-button>
          <b-button type="reset" variant="warning">Limpar</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
// Importando a instância do aplicativo Firebase
import { app } from '../firebaseDB';
// Importando as funções do Firebase que serão usadas abaixo
import { getDatabase, ref, set, update } from "firebase/database";
import Vue from "vue"  

export default {
  data() {
    return {
      form: {}, // Objeto para armazenar os dados do formulário
      databaseRef: '', // A referência ao banco de dados
    };
  },

  watch: {
    // Quando o item da rota muda, atualiza o formulário
    '$route.params.item': {
      immediate: true,
      handler(item) {
        if (item) {
          this.form = { ...item };
        }
      },
    },
    // Quando a referência ao banco de dados da rota muda, atualiza a referência ao banco de dados
    '$route.params.databaseRef': {
      immediate: true,
      handler(databaseRef) {
        if (databaseRef) {
          this.databaseRef = databaseRef;
        }
      },
    },
  },

  methods: {
    // Salva o item no banco de dados
    saveTask() {
      // Obtém a instância do banco de dados
      const database = getDatabase(app);

      if (this.$route.params.item) {
        // Se um item foi passado pela rota, atualiza o item existente
        update(ref(database, this.databaseRef + '/' + this.$route.params.item.id), this.form)
          .then(() => {
            this.clearForm();
            this.makeToast();
            this.$router.push({ name: 'leituraEManipulacaoDB' });
          })
          .catch(error => {
            console.error("Erro ao atualizar item:", error);
          });
      } else {
        // Se nenhum item foi passado pela rota, cria um novo item
        set(ref(database, this.databaseRef + '/' + Date.now()), this.form)
          .then(() => {
            this.clearForm();
            this.makeToast();
            this.$router.push({ name: 'leituraEManipulacaoDB' });
          })
          .catch(error => {
            console.error("Erro ao salvar dados:", error);
          });
      }
    },

    // Limpa o formulário
    clearForm() {
      this.form = {};
    },

    // Exibe um toast de sucesso
    makeToast() {
      const vm = new Vue();
      vm.$bvToast.toast('Dados salvos com sucesso', {
        title: 'Sucesso',
        autoHideDelay: 5000,
        variant: 'success'
      })
    }
  }
}
</script>

<style>

</style>
