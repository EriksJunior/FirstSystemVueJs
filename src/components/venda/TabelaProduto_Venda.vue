<template>
  <div id="containerTabelaProdutoVenda">
    <div>
      <div>
        <table class="table table-dark table-pesquisa">
          <thead>
            <tr>
              <th scope="col">Cod</th>
              <th scope="col">Nome produto</th>
              <th scope="col">Unidade</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Valor Unitario</th>
              <th scope="col">Valor Total</th>
              <th scope="col">Editar</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="dadosProdutos in productsSaleById[0]"
              :key="dadosProdutos.id"
            >
              <td>
                {{ dadosProdutos.id_produto }}
              </td>
              <td>
                {{ dadosProdutos.nome }}
              </td>
              <td>
                {{ dadosProdutos.unidade }}
              </td>
              <td>
                {{ dadosProdutos.quantidade }}
              </td>
              <td>
                {{ dadosProdutos.valor }}
              </td>
              <td>
                {{ dadosProdutos.quantidade * dadosProdutos.valor }}
              </td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="check-square-fill"
                  scale="2"
                  variant="success"
                  @click="editProductById(dadosProdutos.id)"
                ></b-icon>
              </td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="x-square-fill"
                  scale="2"
                  variant="danger"
                  @click="deleteProductSaleById(dadosProdutos.id)"
                ></b-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "../../config/config";

export default {
  props: {
    idVenda: {
      type: Number,
    },
    dadosProdutoVenda: {
      type: Object,
    },
    eventUpdateTable: {
      type: Boolean,
    },
  },
  data() {
    return {
      productsSaleById: {},
      productsTableEditById: {},
    };
  },
  methods: {
    async getProductsSaleById(id) {
      const { data } = await http.get(`/movVenda/produtoVenda/${id}`);
      this.productsSaleById = data;
      this.$emit("resetarValorBoolean", true);
      return data;
    },

    async deleteProductSaleById(idProduct) {
      const { data } = await http.delete(`/movVenda/${idProduct}`);
      alert("produto Deletado com sucesso");
      this.getProductsSaleById(this.dadosProdutoVenda.id_venda);
      return data;
    },

    async editProductById(idVenda) {
      const { data } = await http.get(`/movVenda/produto/venda/${idVenda}`);
      this.productsTableEditById = data;
      this.$emit("productsTableEdit", this.productsTableEditById);
      this.$emit("eventUpdateTeste", true);
    },
  },
  watch: {
    eventUpdateTable() {
      this.getProductsSaleById(this.dadosProdutoVenda.id_venda);
    },
    async idVenda(idVenda) {
      await this.getProductsSaleById(idVenda);
    },
  },
};
</script>

<style>
#containerTabelaProdutoVenda {
  width: 100%;
  padding-top: 50px;
}

th {
  background-color: rgb(61, 61, 151);
  color: white;
}

th,
td {
  padding: 5px;
  border-bottom: 1px solid #ddd;
  color: white;
}

tr:hover {
  background: linear-gradient(to bottom, #1d323b, #2947a7);
  color: red;
}

.icones:hover {
  cursor: pointer;
}
</style>