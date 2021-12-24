<template>
  <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
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
            Adicionar Produto
          </p>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-card
            bg-variant="light"
            text-variant="dark"
            class="mt-2 col-md-12 col-sm-12 col-lg-12 col-xl-12"
          >
            <form class="row">
              <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <b-form-group label="Produto">
                  <b-form-select
                    size="sm"
                    text-field="nome"
                    value-field="id"
                    :options="dadosProdutoVenda"
                  >
                  </b-form-select>
                </b-form-group>
              </div>

              <div class="col-md-6 col-sm-6 col-lg-6 col-xl-2">
                <b-form-group label="Quantidade">
                  <b-form-input class="col-sm-12" size="sm"></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-6 col-sm-6 col-lg-6 col-xl-2">
                <b-form-group label="Valor unitario">
                  <b-form-input class="col-sm-12" size="sm"></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-6 col-sm-6 col-lg-6 col-xl-2">
                <b-form-group label="Unidade">
                  <b-form-input class="col-sm-12" size="sm"></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-6 col-sm-6 col-lg-6 col-xl-2 mt-3">
                <b-button
                  variant="success"
                  class="col-md-6 col-sm-6 col-lg-6 col-xl-10 mt-3"
                  size="sm"
                  >Adicionar</b-button
                >
              </div>
            </form>
            <TabelaProdutoVenda :dadosProduto="dadosProdutoVenda" />
          </b-card>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { http } from "../../config/config";
import TabelaProdutoVenda from "./TabelaProduto_Venda.vue";
export default {
  components: {
    TabelaProdutoVenda,
  },
  data() {
    return {
      dadosProdutoVenda: [],
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
      this.dadosProdutoVenda = data;
      return data;
    },

    async adicionarProdutoVendas() {
      // const { data } = await http.post("/vendas", this.dadosVenda);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style >
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