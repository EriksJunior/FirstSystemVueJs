<template>
  <div id="containerTabelaProdutoVenda">
    <div>
      <div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Cod</th>
              <th scope="col">Nome produto</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Valor Unitario</th>
              <th scope="col">Valor Total</th>
              <th scope="col">Editar</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>
                <p>Nome produto</p>
              </td>
              <td>
                <p>5</p>
              </td>
              <td>
                <p>1.000,00</p>
              </td>
              <td>
                <p>5.000,00</p>
              </td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="check-square-fill"
                  scale="2"
                  variant="success"
                  @click="teste"
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
      </div>
    </div>
  </div>
</template>

<script>
// import { http } from "../../config/config";

export default {
  props: {
    dadosProdutovenda: {
      type: Object,
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
    teste() {
      console.log(this.dadosProdutoVenda, "merdaaaDOIS");
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