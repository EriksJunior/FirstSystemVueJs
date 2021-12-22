<template>
  <div id="containerTabelaProduto">
    <div>
      <div id="tabelaDeProduto">
        <h1 style="color: white">Pesquisa</h1>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome produto</th>
              <th scope="col">Data de cadastro</th>
              <th scope="col">Preço de custo</th>
              <th scope="col">Editar</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="produto in dadosProduto" :key="produto.id">
              <td>
                {{ produto.id }}
              </td>
              <td>
                {{ produto.nome }}
              </td>
              <td>
                {{ produto.data_cadastro }}
              </td>
              <td>
                {{ produto.preco_custo }}
              </td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="check-square-fill"
                  scale="2"
                  variant="success"
                  @click="editProduto(produto.id)"
                ></b-icon>
              </td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="x-square-fill"
                  scale="2"
                  variant="danger"
                  @click="deleteProduto(produto.id)"
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
    dadosProduto: {
      type: Array,
    },
    eventUpdateTable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    async editProduto(idProduto) {
      const { data } = await http.get(`/produto/${idProduto}`);
      this.$emit("dadosParaFormProduto", data);
      console.log(data);
      return data;
    },
    async deleteProduto(idProduto) {
      const { data } = await http.delete(`/produto/${idProduto}`);
      this.$emit("updateTable", this.eventUpdateTable);
      return data;
    },
  },
  watch: {},
};
</script>

<style>
#containerTabelaProduto {
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
}

#tabelaDeProduto {
  width: 100%;
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