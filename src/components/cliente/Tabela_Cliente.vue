<template>
  <div id="containerTabelaCliente">
    <div :style="infoPesquisa">
      <div id="tabelaDeClientes">
        <h1 style="text-align: center">Pesquisa</h1>
        <table>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Cpf/Cnpj</th>
            <th>Bairro</th>
            <th>Endereço</th>
            <th>Numero</th>
            <th>Cidade</th>
            <th>UF</th>
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
          </tr>
        </table>
      </div>
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
    dadosCliente: {
      type: Object,
    },
  },
  data() {
    return {
      infoPesquisa: "display: none;",
      perPage: 3,
      currentPage: 1,
      items: [],
    };
  },
  methods: {},
  computed: {
    rows() {
      return this.items.length;
    },
  },
  watch: {
    listarDadosTabela() {
      this.infoPesquisa = this.listarDadosTabela;
      this.testeDados = this.dadosCliente;
    },
    dadosCliente() {
      console.log(this.dadosCliente);
    },
  },
};
</script>

<style>
#containerTabelaCliente {
  width: 47%;
  margin-left: 40px;
}

#tabelaDeClientes {
  width: 100%;
  text-align: center;
  margin-top: 70px;
}

table,
th,
td {
  border: solid 1px black;
}

th {
  background-color: rgb(61, 61, 151);
  color: white;
}
</style>