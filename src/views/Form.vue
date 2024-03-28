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
  import { getDatabase, ref, set } from "firebase/database";  

  export default {
    mounted: function() {
      console.log(this.$route.path);
    },

    data() {
      return {
        form: {
          subject: '',
          description: '',
        },
      }
    },

    methods: {
      saveTask(){
      console.log('saveTask method called');
      
      const database = getDatabase(); // Inicializando o banco de dados Firebase
      
      // Gravando os dados usando set()
      set(ref(database, 'tasks/' + Date.now()), { // Usando um timestamp para criar uma nova chave única
        subject: this.form.subject,
        description: this.form.description
      }).then(() => {
        this.clearForm();
        this.makeToast();
        this.$router.push({name: 'ferramentas'})
      }).catch(error => {
        console.error("Erro ao salvar tarefa:", error);
      });
    },

      clearForm(){
        this.form.subject = '';
        this.form.description = '';
      },

      makeToast(){
        const vm = new Vue();
        vm.$bvToast.toast('Tarefa Salva com sucesso', {
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