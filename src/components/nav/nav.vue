<template>
  <div id="nav">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/home">Home</b-nav-item>

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
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
#nav {
  width: 100%;
}
</style>
