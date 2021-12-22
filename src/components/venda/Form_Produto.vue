<template>
  <div class="form-group dadosProduto col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <b-navbar toggleable>
      <b-navbar-toggle target="navbar-toggle-collapse" id="navBarStyle">
        <template #default="{ expanded }">
          <p>
            <b-icon
              v-if="expanded"
              icon="plus-circle-fill"
              variant="danger"
              animation="spin-pulse"
            ></b-icon>
            <b-icon v-else icon="plus-square-fill" variant="info"></b-icon>
            Selecionar Produto
          </p>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-card bg-variant="light" text-variant="dark" class="mt-2">
            <div class="mt-3">
              <b-form-group label="Produto">
                <b-form-select
                  class="col-sm-5 col-md-5 col-lg-5 col-xl-5"
                  size="sm"
                  text-field="nome"
                  value-field="id"
                  :options="nomeProduto"
                >
                </b-form-select>
              </b-form-group>
            </div>
          </b-card>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { http } from "../../config/config";
export default {
  data() {
    return {
      nomeProduto: [
        {
          nome: "teste",
          value: "id",
        },
      ],
    };
  },
  methods: {
    clearVenda() {
      (this.dadosVenda.produto = ""),
        (this.dadosVenda.quantidade = 0),
        (this.dadosVenda.valor = 0),
        (this.dadosVenda.unidade = "");
    },
    async getProducts() {
      const { data } = await http.get("/produto");
      this.produto = data;
      console.log(this.produto);
    },

    async adicionarProdutoVendas() {
      // const { data } = await http.post("/vendas", this.dadosVenda);
      console.log(this.dadosVenda);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scopet>
#cardContainer {
  width: 100%;
  height: 88.6vh;
  margin-top: 50px;
}

#tabContainer {
  width: 80%;
  margin: 0 auto;
}

#navBarStyle {
  border: none !important;
}
</style>