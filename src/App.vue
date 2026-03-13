<template>
  <div>

    <h1 :class="{ 'title': true, 'title-home': isHome }">Curso Vue 3</h1>

    <p :class="pClass">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
      eveniet rerum iste quidem repellat non, nisi
      alias reprehenderit veritatis debitis hic aperiam est rem nesciunt pariatur soluta sapiente laboriosam dolorum!
    </p>

    <p :style="styleClass">Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Dolores autem, ex sit quo
      exercitationem necessitatibus nostrum consequatur harum quidem, libero minus quas magni debitis sed nobis nam
      quam? Neque, deserunt!</p>

    <div class="todos-item" v-for="(obj, index) in todos" :key="obj.id">
      <img v-if="obj.imgSrc" :src="obj.imgSrc" />
      {{ index + 1 }} - {{ obj.title }}
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      classVar: "title",
      isHome: true,
      pClass: ['text', 'text-home'],
      styleClass: { color: 'aqua', backgroundColor: 'black', fontSize: '20px' },
      todos: [

        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false,
          "imgSrc": "https://github.com/noname697.png",
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false,
          "imgSrc": "https://github.com/noname697.png",
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

.todos-item {
  background-color: black;
  margin: 0 0 5px 0;
  padding: 3px 6px;
  color: white;
}

.title {
  font-size: 20px;
  color: blue;
}

.title-home {
  font-size: 40px;
  color: green;
}

.text {
  color: red;
}

.text-home {
  color: #42b983;
}
</style>
