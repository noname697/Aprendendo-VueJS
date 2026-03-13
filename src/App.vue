<template>
  <div>
    {{ fullName }} <br><br>

    <h2>ToDo's em aberto</h2>
    <div v-for="i in uncompletedTodos" :key="i.id">
      {{ i.title }}

    </div>
    <h2>ToDo's Completadas</h2>
    <div v-for="i in completedTodos" :key="i.id">
      {{ i.title }}

    </div>
    <br><br><br>
    <h2>Todas as ToDo's</h2>
    <div v-for="i in todos" :key="i.id">
      <input type="checkbox" v-model="i.completed" />
      {{ i.title }}

    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Snow'
      },
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
    }
  },

  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    },

    uncompletedTodos() {
      return this.todos.filter(todo => !todo.completed)
    },

    completedTodos() {
      return this.todos.filter(todo => todo.completed)
    }
  },

  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>
