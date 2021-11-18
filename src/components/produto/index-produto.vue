<template>
  <div id="indexProduto">
    <FormProduto @buscarDadosProduto="intermediarioFrmProduto = $event" :dadosProdutoTabela="intermediarioFrmTabela"/>
    <TabelaProduto :dadosProduto="intermediarioFrmProduto" @dadosParaFormProduto="intermediarioFrmTabela = $event"/>
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