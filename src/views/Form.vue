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
          <b-button type="button" variant="info" class="mr-2">Salvar</b-button>
          <b-button type="reset" variant="warning">Limpar</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
  export default {
    mounted: function() {
      console.log(this.$route.path);
    },

    data() {
      return {
        form: {
          subject: '',
          description: ''
        },
      }
    },
    methods: {
       
    }
  }
</script>

<style>

</style>