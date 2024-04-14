<template>
  <div>
    <!-- A interface do usuário para selecionar o banco de dados e exibir os itens -->
    <div class="d-flex flex-column justify-content-center align-items-center">
      <!-- O seletor para escolher o banco de dados -->
      <b-form-select v-model="databaseRef" :options="['versao1/palestras', 'versao1/anais']"></b-form-select>
      <!-- Loop através de cada item e exibir em um cartão -->
      <div class="col-6 mt-2" v-for="item in items" :key="item.id">
        <!-- O cartão para exibir o item -->
        <b-card :title="getTitle(item)">
          <!-- O conteúdo do item -->
          <b-card-text v-html="getContent(item)"></b-card-text>
          <!-- Botões para editar e excluir o item -->
          <b-button variant="info" class="mr-2" @click="editItem(item)">Editar</b-button>
          <b-button variant="danger" class="mr-2" @click="deleteItem(item)">Excluir</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
// Importando a instância do aplicativo Firebase
import { app } from '../firebaseDB';
// Importando as funções do Firebase que serão usadas abaixo
import { getDatabase, ref, onValue, remove } from "firebase/database";

export default {
  data() {
    return {
      items: [], // Array para armazenar os itens do banco de dados
      databaseRef: 'versao1/palestras', // A referência ao banco de dados
    };
  },

  watch: {
    // Quando a referência ao banco de dados muda, recarrega os itens
    databaseRef() {
      this.loadItems();
    },
  },

  // Quando o componente é montado, carrega os itens
  mounted() {
    this.loadItems();
  },

  methods: {
    // Carrega os itens do banco de dados
    loadItems() {
      // Obtém a instância do banco de dados
      const db = getDatabase(app);
      // Cria uma referência para os itens no banco de dados
      const itemsRef = ref(db, this.databaseRef);

      // Escuta as mudanças nos itens
      onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Transforma os itens em um array e armazena no estado do componente
          this.items = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
        }
      });
    },

    // Retorna o título do item baseado na sua estrutura
    getTitle(item) {
      if (this.databaseRef === 'versao1/palestras') {
        return item.date + ' - ' + item.time;
      } else if (this.databaseRef === 'versao1/anais') {
        return item.title;
      }
    },

    // Retorna o conteúdo do item baseado na sua estrutura
    getContent(item) {
      if (this.databaseRef === 'versao1/palestras') {
        return `Palestra: ${item.description}<br>
                Local: ${item.place}<br>
                Palestrante: ${item.speaker}`;
      } else if (this.databaseRef === 'versao1/anais') {
        return `Título: ${item.title}<br>
                Autor: ${item.autor}<br>
                Caminho: ${item.path}`;
      }
    },

    // Navega para a página de edição com o item e a referência ao banco de dados
    editItem(item) {
      this.$router.push({ name: 'edicaoDados', params: { item: item, databaseRef: this.databaseRef } });
    },
    
    // Remove o item do banco de dados
    deleteItem(item) {
      const db = getDatabase();
      remove(ref(db, this.databaseRef + '/' + item.id))
        .then(() => {
          console.log("Item removido com sucesso");
        })
        .catch((error) => {
          console.error("Erro ao remover item:", error);
        });
    },
  }
};
</script>

<style>

</style>
