<template>
  <div>
    <input v-model="name" type="text"> <br>
    {{ name }}

    <br><br>

    <input v-model="user.firstName" type="text"> <br>
    <input v-model="user.lastName" type="text"> <br>
    {{ user.firstName }} {{ user.lastName }}

    <br><br><br>

    <select v-model="pageCount">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select> <br>
    {{ pageCount }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      pageCount: 5,
      user: {
        firstName: 'Arthur',
        lastName: 'Manenti'
      }
    }
  },

  watch: {
    name(newValue) {
      if (newValue.length >= 3) {
        this.saveUserName()
      }
    },
    pageCount() {
      this.changePage()
    },
    user: {
      handler(){
        console.log("User Changed")
      },
      deep: true

    }
  },

  computed: {

  },

  methods: {
    saveUserName() {
      console.log(this.name);
    },
    changePage() {
      console.log("Ajax changePage");
    }
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
