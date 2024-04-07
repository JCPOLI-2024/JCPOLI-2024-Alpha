<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="col-6 mt-2" v-for="task in tasks" :key="task.id">
        <b-card :title="task.subject">
          <b-card-text>
            {{ task.description }}
          </b-card-text>

          <b-button variant="info" class="mr-2" @click="editTask(task)">Editar</b-button>
          <b-button variant="danger" class="mr-2">Excluir</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  data() {
    return {
      tasks: [],
    };
  },

  mounted() {
    const db = getDatabase();
    const tasksRef = ref(db, 'tasks');

    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.tasks = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
      }
    });
  },
  methods: {
    editTask(task) {
      this.$router.push({ name: 'form', params: { task: task } });
    },
  }
};
</script>

<style>

</style>
