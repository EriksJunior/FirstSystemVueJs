<template>
  <div class="table-responsive">
    <b-card-text responsive>
      <div id="containerTabelaPesquisa">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Nome Produto</th>
              <th scope="col">Quantidade</th>
              <th scope="col">N° NFe</th>
              <th scope="col">Tipo Movimentação</th>
              <th scope="col">Nome Fornecedor</th>
              <th scope="col">Editar</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="movEstoque in listMovEstoque" :key="movEstoque.id">
              <td>{{ movEstoque.produto.nome }}</td>
              <td>{{ movEstoque.quantidade }}</td>
              <td>{{ movEstoque.numero_nfe }}</td>
              <td>{{ movEstoque.tipo_movimentacao }}</td>
              <td>{{ movEstoque.fornecedor.razao_social }}</td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="check-square-fill"
                  scale="2"
                  variant="success"
                  @click="selectMovInventoryById(movEstoque.id)"
                ></b-icon>
              </td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="x-square-fill"
                  scale="2"
                  variant="danger"
                  @click="deleteMovInventory(movEstoque.id)"
                ></b-icon>
              </td>
            </tr>
          </tbody>
        </table>
        <b-button
          variant="info"
          class="col-md-1 col-sm-2 col-lg-1 col-xl-1 mt-3"
          size="sm"
          @click="this.pesquisarTodasMovimentacoes"
          >Pesquisar</b-button
        >
      </div>
    </b-card-text>
  </div>
</template>

<script>
import { http } from "../../config/config";
export default {
  props: {
    atualizarListagemEstoque: {
      type: Boolean,
    },
  },
  data() {
    return {
      listMovEstoque: [],
    };
  },
  methods: {
    async pesquisarTodasMovimentacoes() {
      const { data } = await http.get("/movestoque");
      this.listMovEstoque = data;
      Object.assign(data, this.listMovEstoque);
      this.$emit("atualizarListagemEstoqueParaComponentePai", false);
      return data;
    },
    async selectMovInventoryById(idMovInventory) {
      try {
        const { data } = await http.get(`/movestoque/${idMovInventory}`);
        this.$emit("tableDataForStock", data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteMovInventory(idMovInventory) {
      try {
        const { data } = await http.delete(`/movestoque/${idMovInventory}`);
        alert("Movimentação deletada com sucesso!");
        this.pesquisarTodasMovimentacoes();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    atualizarListagemEstoque() {
      this.pesquisarTodasMovimentacoes();
    },
  },
};
</script>

<style>
</style>