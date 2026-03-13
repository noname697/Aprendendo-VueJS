<template>
  <div>
    <button @click.once="onClick">Enviar</button>

    <br><br>

    <div @mouseover="onMouseOver" @mouseout="onMouseOut">
      Mouse Over
    </div>

    <br><br>

    <form action="https://google.com" @submit.prevent="onSubmit">
      <input type="text" @keyup="onKeyUp"/>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    onClick(e) {
      console.log("enviado", e)
    },

    onMouseOver(e) {
      console.log("Mouse over", e)
    },
    onMouseOut(e) {
      console.log("Mouse Out", e)
    },
    onKeyUp(e){
      console.log(e.target.value)
    },
    onSubmit(e) {
      console.log("Form enviado", e)
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
