<template>
  <div class="home">
    <div class="categoryFilter">
      <ul>
        <li @click="filterCategory('')">All</li>
        <li @click="filterCategory('/category/electronics')">Electronics</li>
        <li @click="filterCategory('/category/jewelery')">Jewelery</li>
        <li @click="filterCategory(`/category/men's%20clothing`)">
          Mens's clothing
        </li>
        <li @click="filterCategory(`/category/women's%20clothing`)">
          Women's clothing
        </li>
      </ul>

      <div class="filterContent">
        <select v-model="selected" @change="orderBy">
          <option disabled value="">Ordenar por</option>
          <option>Popularidade</option>
          <option>Menor Preço</option>
          <option>Maior preço</option>
        </select>
      </div>
    </div>

    <main class="listProducts">
      <div class="productsContainer" v-if="listProducts !== null">
        <div v-for="product in listProducts" :key="product.id">
          <Product :product="product" />
        </div>
      </div>

      <div class="loading" v-else>
        <span>Carregando dados da API...</span>
      </div>
    </main>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
export default {
  name: "Home",
  components: {
    Product,
  },

  data() {
    return {
      listProducts: null,
      id: 1,
      carrinho: this.$store.state.cart,
      selected: "",
      isActive: false,
    };
  },

  methods: {
    async fetchApi() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      this.listProducts = data;
    },

    async apiCategory(category) {
      this.isActive = !this.isActive;
      (this.listProducts = null), (this.selected = "");
      const res = await fetch(`https://fakestoreapi.com/products${category}`);
      const data = await res.json();
      console.log(res);
      this.listProducts = data;
    },

    filterCategory(category) {
      this.apiCategory(category);
    },

    orderBy() {
      if (this.selected == "Popularidade") {
        this.listProducts.sort(function (b, a) {
          if (a.rating.rate > b.rating.rate) {
            return 1;
          }
          if (a.rating.rate < b.rating.rate) {
            return -1;
          }

          return 0;
        });
      } else if (this.selected == "Menor Preço") {
        this.listProducts.sort(function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }

          return 0;
        });
      } else {
        this.listProducts.sort(function (b, a) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }

          return 0;
        });
      }
    },
  },

  mounted() {
    this.fetchApi();
  },
};
</script>

<style scoped>
main {
}

.productsContainer {
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 40px;
  justify-content: center;
  gap: 20px;
}

.listProducts {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 0fr;
  grid-column-gap: 80px;
  grid-row-gap: 0;
}

.categoryFilter {
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 20px 50px;
}

option {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.categoryFilter ul {
  display: flex;
  gap: 20px;
}

.categoryFilter ul li {
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.categoryFilter ul li:hover {
  border-radius: 5px;
  background: #f97f51;
  transition: 1s;
}

.filterContent select {
  width: 150px;
  height: 35px;
  padding: 5px;
  border-radius: 5px;

  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.loading {
  color: #f97f51;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>