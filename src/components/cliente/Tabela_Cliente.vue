<template>
  <div id="containerTabelaCliente">
    <div :style="infoPesquisa">
      <div id="tabelaDeClientes">
        <h1 style="color: white">Pesquisa</h1>
        <table>
          <tr>
            <th>Id</th>
            <th>NOME</th>
            <th>CPF/CNPJ</th>
            <th>BAIRRO</th>
            <th>ENDEREÇO</th>
            <th>NUMERO</th>
            <th>CIDADE</th>
            <th>UF</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
          <tr v-for="cliente in dadosCliente.data" :key="cliente.id">
            <td>
              {{ cliente.id }}
            </td>
            <td>
              {{ cliente.nome }}
            </td>
            <td>
              {{ cliente.cpfcnpj }}
            </td>
            <td>
              {{ cliente.bairro }}
            </td>
            <td>
              {{ cliente.endereco }}
            </td>
            <td>
              {{ cliente.numero }}
            </td>
            <td>
              {{ cliente.cidade }}
            </td>
            <td>
              {{ cliente.uf }}
            </td>
            <td style="text-align: center">
              <b-icon
                class="icones"
                icon="check-square-fill"
                scale="2"
                variant="success"
                @click="editCliente(cliente.id)"
              ></b-icon>
            </td>
            <td style="text-align: center">
              <b-icon
                class="icones"
                icon="x-square-fill"
                scale="2"
                variant="danger"
                @click="deleteCliente(cliente.id)"
              ></b-icon>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "../../config/config";

export default {
  props: {
    listarDadosTabela: {
      type: String,
    },
    limparDados: {
      type: String,
    },
    dadosCliente: {
      type: Object,
    },
  },
  data() {
    return {
      infoPesquisa: "display: none;",
      perPage: 3,
      currentPage: 1,
    };
  },
  methods: {
    async editCliente(idCliente) {
      const { data } = await http.get(`/cliente/${idCliente}`);
      this.$emit("envInfoFromForm", data);
      return data;
    },
    async deleteCliente(idCliente) {
      await http.delete(`/cliente/${idCliente}`);
    },
  },
  watch: {
    listarDadosTabela() {
      this.infoPesquisa = this.listarDadosTabela;
      this.testeDados = this.dadosCliente;
    },
  },
};
</script>

<style>
#containerTabelaCliente {
  width: 47%;
  margin: 0 auto;
}

#tabelaDeClientes {
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
  background-color: rgb(73, 124, 170);
  color: red;
}

.icones:hover {
  cursor: pointer;
}
</style>