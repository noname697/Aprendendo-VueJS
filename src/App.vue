<template>
  <div>
    <TheHeader>
      <template v-slot:title>
        Home
      </template>
      <template v-slot:description>
        <p>descrição</p>
      </template>

      Conteúdo do header ...
    </TheHeader>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';


export default {
  name: 'App',
  components: {
    TheHeader
  },
  data() {
    return {
    }
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  watch: {
  },
  computed: {
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
