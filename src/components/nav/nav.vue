<template>
  <div id="nav" v-if="this.$route.path != '/relatPedidoVenda'">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Cadastros" left>
          <b-dropdown-item to="/cliente">Cliente</b-dropdown-item>
          <b-dropdown-item to="/produto">Produto</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Vendas" left>
          <b-dropdown-item to="/venda">Pedido de Venda</b-dropdown-item>
          <b-dropdown-item to="/nfenfce">NFe/NFCe</b-dropdown-item>
          <b-dropdown-item to="/relatorio">Relatórios</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Controles" left>
          <b-dropdown-item to="/estoque">Estoque</b-dropdown-item>
          <b-dropdown-item to="/financeiro">Financeiro</b-dropdown-item>
          <b-dropdown-item to="/caixa">Caixa</b-dropdown-item>
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
