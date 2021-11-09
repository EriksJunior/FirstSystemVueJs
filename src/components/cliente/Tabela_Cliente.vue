<template>
  <div id="tabelaCliente">
    <div :style="infoPesquisa">
      <h1 style="text-align: center; margin-bottom: 10px; margin-top: 70px">
        Pesquisa
      </h1>
      <b-table foot-variant: dark striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
// import { http } from "../../config/config";

export default {
  props: {
    listarDadosTabela: {
      type: String,
    },
    limparDados: {
      type: String,
    },
  },
  data() {
    return {
      infoPesquisa: "display: none;",
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  watch: {
    listarDadosTabela() {
      this.infoPesquisa = this.listarDadosTabela;
    },
  },
};
</script>

<style>
#tabelaCliente {
  width: 47%;
  margin-left: 40px;
}
</style>