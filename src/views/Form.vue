<template>
  <div>
    <b-form class="mt-2">
      <b-row>
        <b-col class="col-6 offset-sm-3">
              <b-form-group
                  label="Tarefa:"
                  label-for="subject"
              >
              <b-form-input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required       
              >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col class="col-6 offset-sm-3">
              <b-form-group
                  label="Descricao:"
                  label-for="description"
              >
              <b-form-textarea
                  id="description"
                  v-model="form.description"
                  type="text"
                  required       
              >
              </b-form-textarea>
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
import { db } from '../firebaseDB';
import Vue from "vue"
import { getDatabase, ref, set, update } from "firebase/database";  

export default {
  data() {
    return {
      form: {
        // substituir aqui os campos de acordo com arquivo forneceido
        subject: '',
        description: '',
      },
    }
  },

  watch: {
    '$route.params.task': {
      immediate: true,
      handler(task) {
        if (task) {
          this.form = { ...task };
        }
      },
    },
  },

  methods: {
    saveTask() {
      const database = getDatabase();

      if (this.$route.params.task) {
        // Atualiza a palestra existente
        update(ref(database, 'versao1/palestras/' + this.$route.params.task.id), this.form)
          .then(() => {
            this.clearForm();
            this.makeToast();
            this.$router.push({ name: 'ferramentas' });
          })
          .catch(error => {
            console.error("Erro ao atualizar tarefa:", error);
          });
      } else {
        // Criar uma nova palestra
        set(ref(database, 'versao1/palestras/' + Date.now()), this.form)
          .then(() => {
            this.clearForm();
            this.makeToast();
            this.$router.push({ name: 'ferramentas' });
          })
          .catch(error => {
            console.error("Erro ao salvar dados:", error);
          });
      }
    },

    clearForm() {
      this.form.subject = '';
      this.form.description = '';
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