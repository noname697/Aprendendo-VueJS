import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      firstName: "Jon",
      lastName: "Snow",
      email: "jon@snow.com",
    },
    products: [],
    cart: [],
  },
  mutations: {

  },
  actions: {
  },
  getters: {
  },
})
