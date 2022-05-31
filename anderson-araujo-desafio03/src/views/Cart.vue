<template>
  <div class="container">
    <h1>Meu Carrinho</h1>

    <main id="main">
      <div v-if="cart.length !== 0">
        <div id="card" v-for="item in cart" :key="item.id">
          <div class="ProductAndDescription">
            <div class="ContainerProduct">
              <img :src="item.image" :alt="item.title" />
              <div class="NameProduct">
                <div>
                  <h1>{{ item.title }}</h1>
                  {{ item.description }}
                </div>
                <div class="remove" @click="removeProduct(item.id)">🗑️</div>
              </div>
            </div>
          </div>
          <div class="ProductSize">
            <select>
              <option value="">M</option>
              <option value="">P</option>
              <option value="">G</option>
              <option value="">GG</option>
            </select>
            <div class="qtyCount">
              <button @click="RemoveQuantity(item.id)">-</button>
              {{ item.qtd }}
              <button @click="AddQuantity(item.id)">+</button>
            </div>

            <div class="Value">
              <p>Valor Unitario $ {{ item.price.toFixed(2) }}</p>
            </div>

            <div class="Value">
              <p class="price">Valor total ${{ item.totalItem.toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="NoProductCart" v-else>
        <span>🛒</span>

        <p>Seu carrinho está vazio</p>
        <router-link to="/">+ Adicionar Produto</router-link>
      </div>

      <div class="infoCart">
        <h1>Resumo</h1>
        <div>
          <h4>Total:</h4>
          <p>$ {{ $store.getters.total.toFixed(2) }}</p>
        </div>
        <button>Realizar pagamento</button>
        <router-link to="/">
          <button class="KeepBuying">Continuar Comprando</button>
        </router-link>
      </div>
    </main>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  components: {},

  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      cart: "getCart",
    }),
  },
  methods: {
    AddQuantity(product) {
      this.$store.commit("incrementProduct", product);
    },

    RemoveQuantity(product) {
      this.$store.commit("decrementProduct", product);
    },

    removeProduct(product) {
      this.$store.commit("RemoveToCart", product);
    },
  },
};
</script>


<style>
.container {
  max-width: 1220px;
  margin: 0 auto;
}
.container h1 {
  text-align: center;
}

main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0fr;
  grid-column-gap: 80px;
  grid-row-gap: 0;
}

.NoProductCart {
  height: 50vh;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
}

.NoProductCart p {
  font-size: 1.3rem;
  font-weight: bold;
  color: #616161;
  font-family: Arial, Helvetica, sans-serif;
}

.NoProductCart span {
  font-size: 40px;
}

.NoProductCart a {
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  text-decoration: none;
  height: 60px;
  width: 160px;
  margin-top: 10px;

  font-size: 16px;
}

.infoCart {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.infoCart button {
  margin-top: 10px;
  height: 40px;
}

.infoCart div {
  border: 1px solid rgb(223, 223, 223);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 0px 15px;
  height: 40px;
}

.KeepBuying {
  background: black;
}

img {
  max-width: 100%;
  max-height: 100%;
  width: 20%;
  height: auto;
  margin-top: 20px;
}

#card {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
}

.ContainerProduct {
  display: flex;
  border-top: 1px solid gray;
}

.remove {
  cursor: pointer;
  font-size: 25px;
}

.NameProduct {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;

  margin-top: 20px;
}

.NameProduct h1 {
  font-size: 20px;
}

.ProductSize {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  border: 1px solid gray;
  padding: 10px;
}

select {
  height: auto;
  max-width: 100%;
  width: 90px;
}

.qtyCount {
  display: flex;
  align-items: center;
  width: 90px;
  height: auto;

  gap: 20px;
}

.Value {
  display: flex;
  flex-direction: column;
  width: 97px;
}
</style>