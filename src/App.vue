<template>
  <div>
    <TheHeader v-if="showHeader" />
    <h1>Lifecycle Hooks</h1>
    <br>
    <input v-model="name" type="text">
    {{ name }} <br>
    <button @click="showHeader = !showHeader">Ativar e desativar Header</button>
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
      name: 'Arthur Manenti',
      showHeader: true
    }
  },
  beforeUpdate() {
    console.log('beforeUpdate ' + this.name);

  },
  updated() {
    console.log('updated ' + this.name);

  },
  // beforeCreate() {
  //   console.log('beforeCreate');
  //   console.log('Estado: ' + this.name);
  //   console.log('DOM: ' + this.$el);
  // },

  // created() {
  //   console.log('created');
  //   console.log('Estado: ' + this.name);
  //   console.log('DOM: ' + this.$el);
  // },

  // beforeMount() {
  //   console.log('beforeMount');
  //   console.log('Estado: ' + this.name);
  //   console.log('DOM: ' + this.$el);
  // },




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
