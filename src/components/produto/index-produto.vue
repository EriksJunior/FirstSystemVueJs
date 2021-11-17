<template>
  <div id="indexProduto">
    <FormProduto />
  </div>
</template>

<script>
import FormProduto from "./Form_Produto.vue";
export default {
  components: {
    FormProduto,
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