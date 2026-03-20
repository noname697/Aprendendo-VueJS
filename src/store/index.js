import { createStore } from "vuex";

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
    storeUser(state, data) {
      state.user = data;
    },
  },
  actions: {},
  getters: {},
});
