<template>
  <div>
    <b-form class="mt-2">
      <b-row>
        <b-col class="col-6 offset-sm-3" v-for="(value, key) in form" :key="key">
          <b-form-group :label="key + ':'" :label-for="key">
            <b-form-input :id="key" v-model="form[key]" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="col-6 offset-sm-3">
          <b-button type="button" variant="info" class="mr-2" @click="saveTask">Salvar</b-button>
          <b-button type="reset" variant="warning">Limpar</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { app } from '../firebaseDB';
import { getDatabase, ref, set, update } from "firebase/database";
import Vue from "vue"  

export default {
  data() {
    return {
      form: {},
      databaseRef: '', // Adicione a referência ao banco de dados aqui
    };
  },

  watch: {
    '$route.params.item': {
      immediate: true,
      handler(item) {
        if (item) {
          this.form = { ...item };
        }
      },
    },
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
    saveTask() {
      const database = getDatabase(app);

      if (this.$route.params.item) {
        // Atualiza o item existente
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
        // Criar um novo item
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

    clearForm() {
      this.form = {};
    },

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
