<template>
  <div id="indexCliente">
    <FormCliente
      @listarDadosTabela="listarDadosTabela = $event"
      @dadosCliente="dadosCliente = $event"
    />
    <TabelaCliente
      :listarDadosTabela="listarDadosTabela"
      :dadosCliente="dadosCliente"
    />
  </div>
</template>

<script>
import FormCliente from "../cliente/Form_Cliente.vue";
import TabelaCliente from "../cliente/Tabela_Cliente.vue";

export default {
  data() {
    return {
      listarDadosTabela: "",
      dadosCliente: {},
    };
  },
  components: {
    FormCliente,
    TabelaCliente,
  },
};
</script>

<style>
#indexCliente {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-image: linear-gradient(to top, #19303b, #045e88);
}
</style>