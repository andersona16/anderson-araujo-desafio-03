<template>
  <main>
    <div class="CardItem">
      <router-link to="/">
        <div class="CardImagem">
          <img :src="product.image" :alt="product.title" class="productImg" />
        </div>
        <div class="CardNameProduct">
          <h1>{{ product.title }}</h1>
          <span>{{ product.category }}</span>
          <div class="CardValueProduct">
            <p>${{ product.price.toFixed(2) }}</p>
            <p>⭐ {{ product.rating.rate }}</p>
          </div>
        </div>
      </router-link>

      <button
        @click="
          addCart(product.id, product.title, product.price, product.image)
        "
      >
        Comprar
      </button>
    </div>
  </main>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Product",
  props: ["product"],

  components: {
    Button,
  },

  data() {
    return {};
  },

  methods: {
    addCart(id, title, price, image) {
      const product = {
        id: id,
        title: title,
        price: price,
        image: image,
      };

      this.$store.commit("AddToCart", product);

      alert("Seu produto foi adicionado carrinho!");
    },
  },
};
</script>

<style>
.CardItem {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  height: 440px;
  width: 300px;
  padding: 10px;
  border: 1px solid gray;
  justify-content: space-between;
}

.CardImagem {
  display: flex;
  justify-content: center;
}

.CardImagem img {
  max-width: 100%;
  max-height: 100%;
  height: 250px;
  width: auto;
}

.CardNameProduct h1 {
  color: black;
  font-size: 16px;
}

.CardNameProduct span {
  color: black;
  font-size: 16px;
  background-color: #f5deb3;
}

.CardValueProduct {
  display: flex;
  justify-content: space-between;
}

.CardValueProduct p {
  font-size: 15px;
  color: black;
  font-weight: bold;
}
</style>