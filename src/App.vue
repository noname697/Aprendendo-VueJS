<template>
  <h5>User</h5>
  {{ user.firstName }}
  {{ user.lastName }}
  <br><br>
  <h5>Full Name</h5>
  {{ fullName }}
  <button @click="user.firstName = 'Optimus Prime'">Atualizar</button>
</template>


<script>
import { computed, ref, watch } from 'vue';

export default {
  name: "App",
  setup() {
    const user = ref({
      firstName: "Arthur",
      lastName: "Manenti"
    })

    const fullName = computed(() => `${user.value.firstName} ${user.value.lastName}`)

    watch(user, () => {
console.log("ngsoingvs");

    }, {
      deep: true
    })

    const admin = ref({
      firstName: "Master",
      lastName: "Manenti"
    })


    let name = "Arthur"

    const changeName = () => {
      name = "Jon Snow"
      user.value.firstName = "Sansa"
      admin.value.firstName = "Prime"
    }
    return {
      admin,
      user,
      name,
      fullName,
      changeName
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
