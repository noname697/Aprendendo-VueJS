<template>
  <img alt="vue logo" src="@/assets/logo.png">
  <button @click="updateUser">Atualizar Perfil</button>
  <HelloWorld msg="Welcome" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {

    }
  },
  methods: {
    updateUser() {
      const newUser = {
        firstName: "Arthur",
        lastName: "Manenti",
        email: "arthur@arthur.com",
      }
      this.$store.commit("storeUser", newUser)
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
