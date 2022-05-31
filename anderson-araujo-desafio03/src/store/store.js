import { createStore } from "vuex";

export const useStore = createStore({
  state: {
    cart: [],

  },
  mutations: {
    increment(state) {
      state.count;
    },

    incrementProduct(state, item) {
      const inCart = state.cart.find((product) => product.id === item);
      inCart.qtd++;
      inCart.totalItem = inCart.qtd * inCart.price;
    },

    decrementProduct(state, item) {
      const inCart = state.cart.find((product) => product.id === item);
      if (inCart.qtd > 1) {
        inCart.qtd--;
        inCart.totalItem = inCart.qtd * inCart.price;
      }
    },

    AddToCart(state, item) {
      const inCart = state.cart.find((product) => product.id === item.id);

      if (!inCart) {
        item.qtd = 1;
        item.totalItem = item.price;

        state.cart.push(item);
      } else {
        inCart.qtd++;
        inCart.totalItem = inCart.qtd * inCart.price;
      }


    },

    RemoveToCart(state, item) {
      state.cart = state.cart.filter(product => product.id != item);

    }
  },
  actions: {


    AddToCart(context) {
      context.commit("AddToCart");
    },

    RemoveToCart(context) {
      context.commit("RemoveToCart");
    },

    incrementProduct(context) {
      context.commit("incrementProduct");
    },

    decrementProduct(context) {
      context.commit("decrementProduct");
    },
  },

  getters: {
    total(state) {
      return state.cart.reduce((acc, item) => {
        return (acc += item.totalItem);
      }, 0);
    },

    CartQuantity(state) {
      return state.cart.reduce((acc, item) => {
        return (acc += item.qtd);
      }, 0);
    },


    getCart: state => state.cart




  },
});
