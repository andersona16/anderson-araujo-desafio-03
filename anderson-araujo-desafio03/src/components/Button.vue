<template>
  <div>
    <button class="button"></button>
  </div>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style>
button {
  background: linear-gradient(120deg, #fd4756 0%, #f97f51 100%);
  color: #fff;
  border: none;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 16%);
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: linear-gradient(120deg, #e77b84 0%, #f1ab91 100%);
}
</style>
