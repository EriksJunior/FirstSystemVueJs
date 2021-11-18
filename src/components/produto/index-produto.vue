<template>
  <div id="indexProduto">
    <FormProduto @buscarDadosProduto="intermediario = $event" />
    <TabelaProduto :dadosProduto="intermediario"/>
  </div>
</template>

<script>
import FormProduto from "./Form_Produto.vue";
import TabelaProduto from "./Tabela_Produto.vue";
export default {
  data() {
    return {
      intermediario: [],
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