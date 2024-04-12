<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <b-form-select v-model="databaseRef" :options="['versao1/palestras', 'versao1/anais']"></b-form-select>
      <div class="col-6 mt-2" v-for="item in items" :key="item.id">
        <b-card :title="getTitle(item)">
          <b-card-text v-html="getContent(item)"></b-card-text>

          <b-button variant="info" class="mr-2" @click="editItem(item)">Editar</b-button>
          <b-button variant="danger" class="mr-2" @click="deleteItem(item)">Excluir</b-button>
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
      items: [],
      databaseRef: 'versao1/palestras', // Adicione a referência ao banco de dados aqui
    };
  },

  watch: {
    databaseRef() {
      this.loadItems();
    },
  },

  mounted() {
    this.loadItems();
  },

  methods: {
    loadItems() {
      const db = getDatabase();
      const itemsRef = ref(db, this.databaseRef); // Use a referência ao banco de dados aqui

      onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          this.items = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
        }
      });
    },

    getTitle(item) {
      // Personalize o título do cartão com base na estrutura do item
      if (this.databaseRef === 'versao1/palestras') {
        return item.date + ' - ' + item.time;
      } else if (this.databaseRef === 'versao1/anais') {
        return item.title;
      }
    },

    getContent(item) {
      // Personalize o conteúdo do cartão com base na estrutura do item
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

    editItem(item) {
      this.$router.push({ name: 'edicaoDados', params: { item: item, databaseRef: this.databaseRef } });
    },
    
    deleteItem(item) {
      const db = getDatabase();
      remove(ref(db, this.databaseRef + '/' + item.id)) // Use a referência ao banco de dados aqui
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
