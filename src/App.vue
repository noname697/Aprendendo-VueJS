<template>
  {{ name }} <br><br>
  <h5>User</h5>
  {{ user.firstName }}
  {{ user.lastName }}
  <br><br>
  <h5>Admin</h5>
  {{ admin.firstName }} {{ admin.lastName }}
  <br><br>
  <img @click="changeName" src="@/assets/logo.png" alt="" />
  <HelloWorld />
</template>


<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { reactive, ref } from 'vue';

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const user = reactive({
      firstName: "Arthur",
      lastName: "Manenti"
    })

    const admin = ref({
      firstName: "Master",
      lastName: "Manenti"
    })

    const count = ref('test')
    console.log(count)

    let name = "Arthur"

    const changeName = () => {
      name = "Jon Snow"
      user.firstName = "Sansa"
      admin.value.firstName = "Prime"
    }
    return {
      admin,
      user,
      name,
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
