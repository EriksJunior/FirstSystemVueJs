<template>
  <div id="indexProduto">
    <FormProduto
      @buscarDadosProduto="intermediarioFrmProduto = $event"
      :dadosProdutoTabela="intermediarioFrmTabela"
      :updateTableForm="intermedUpdateTable"
    />
    <TabelaProduto
      :dadosProduto="intermediarioFrmProduto"
      @dadosParaFormProduto="intermediarioFrmTabela = $event"
      @updateTable="intermedUpdateTable = $event"
    />
  </div>
</template>

<script>
import FormProduto from "./Form_Produto.vue";
import TabelaProduto from "./Tabela_Produto.vue";
export default {
  data() {
    return {
      intermediarioFrmProduto: [],
      intermediarioFrmTabela: {},
      intermedUpdateTable: "",
    };
  },
  components: {
    FormProduto,
    TabelaProduto,
  },
};
</script>

<style>
#indexProduto {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>