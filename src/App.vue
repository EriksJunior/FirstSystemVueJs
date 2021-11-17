<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Cadastros" right>
          <b-dropdown-item to="/cliente">Cliente</b-dropdown-item>
          <b-dropdown-item to="/produto">Produto</b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  width: 100%;
  background-image: linear-gradient(to top, #19303b, #032b3d);
  height: 100vh;
}
</style>
