<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "../src/components/nav/nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
body {
  background: linear-gradient(to top, #19303b, #032b3d) fixed;
}
</style>
