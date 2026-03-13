<template>
  <div>
    <div>
      One Way Data Binding <br />
      Two Way Data Binding <br />
      v-model -> Formularios
    </div>

    <br /><br />

    <div>
      <label>Nome</label><br />
      <input v-model="name" type="text" /><br />
      {{ name }}
    </div>

    <br><br>

    <div>
      <label>Esportes</label><br>
      <select v-model="sports">
        <option value="">Escolha</option>
        <option value="futebol">Futebol</option>
        <option value="skate">Skate</option>
        <option value="tênis">Tênis</option>
      </select>
      <br>
      {{ sports }}
    </div>

    <br><br>

    <div>
      <label>NewsLetter</label> <br>
      <input v-model="newsletter" type="radio" value="Sim"> Sim <br>
      <input v-model="newsletter" type="radio" value="Não"> Não
      <br>
      {{ newsletter }}
    </div>

    <br><br>

    <div>
      <label>Contrato</label> <br>
      <input v-model="contract" type="checkbox" value="Sim"> Aceita nossos termos? <br>
      <br>
      {{ contract }}
    </div>

    <br><br>

    <div>
      <label>Marque as cores que você mais gosta: </label> <br>
      <input v-model="colors" type="checkbox" value="azul"> Azul <br>
      <input v-model="colors" type="checkbox" value="amarelo"> Amarelo <br>
      <input v-model="colors" type="checkbox" value="vermelho"> vermelho
      <br>
      {{colors}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'jon Snow',
      sports: '',
      newsletter: '',
      contract: false,
      colors: []
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
