<template>
  <header id="header">
    <nav>
      <router-link class="logo" to="/">
        <ul>
          <li>ide<span>@</span>lShop</li>
        </ul>
      </router-link>

      <router-link class="cart" to="/carrinho">
        <p>{{ $store.getters.CartQuantity }}</p>
        🛒
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style>
#header {
  font-family: "Koulen", cursive;
  margin-bottom: 50px;
  max-width: 100%;

  /* display: flex; */
}

nav {
  display: flex;
  padding: 20px 40px;
  justify-content: space-around;
  margin: 0 auto;

  box-shadow: 0px 3px 6px rgb(0 0 0 / 16%);
}

img {
  height: 30px;
}

nav ul:nth-child(1) {
  display: flex;
}

nav ul:nth-child(2) {
  display: flex;
}

nav ul:nth-child(2) li {
  padding: 0 20px;
  cursor: pointer;

  list-style: none;
  color: #636e72;
  font-size: 20px;
}

nav ul:nth-child(2) li:hover {
  color: #f97f51;
}

nav ul:nth-child(1) li {
  color: #636e72;
  font-size: 23px;
}

nav ul:nth-child(1) li span {
  font-size: 20px;
  color: #f97f51;
}

.cart {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
