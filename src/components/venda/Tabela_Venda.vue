<template>
  <div id="tabelaPesquisaVenda">
    <div>
      <div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Cod</th>
              <th scope="col">Nome Cliente</th>
              <th scope="col">Data Venda</th>
              <th scope="col">Data Entrega</th>
              <th scope="col">Valor Total</th>
              <th scope="col">Editar</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dadosVenda in listVenda" :key="dadosVenda.id">
              <td>{{ dadosVenda.id }}</td>
              <td>{{ dadosVenda.cliente.nome }}</td>
              <td>
                {{ dadosVenda.data_venda | moment }}
              </td>
              <td>
                {{ dadosVenda.data_entrega | moment }}
              </td>
              <td></td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="check-square-fill"
                  scale="2"
                  variant="success"
                  @click="editSaleById(dadosVenda.id)"
                ></b-icon>
              </td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="x-square-fill"
                  scale="2"
                  variant="danger"
                ></b-icon>
              </td>
            </tr>
          </tbody>
        </table>
        <b-button
          variant="info"
          class="col-md-1 col-sm-2 col-lg-1 col-xl-1 mt-3"
          size="sm"
          @click="getVenda"
          >Pesquisar</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "../../config/config";
import moment from "moment";

export default {
  props: {},
  data() {
    return {
      listVenda: [],
      tabIndex: 0,
    };
  },
  methods: {
    async getVenda() {
      const { data } = await http.get("/venda");
      this.listVenda = data;
    },

    async editSaleById(idVenda) {
      try {
        const { data } = await http.get(`/venda/${idVenda}`);
        this.$emit("dadosDaTabela", data);
        this.$emit("eventoMudarTab", this.tabIndex--);
      } catch (error) {
        console.log(error);
      }
    },
  },
  filters: {
    moment(value) {
      return moment(value).format("DD/MM/YYYY");
    },
  },
};
</script>

<style>
#tabelaPesquisaVenda {
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