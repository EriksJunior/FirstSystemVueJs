<template>
  <div id="cardContainer">
    <div id="tabContainer">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Venda" active>
            <b-card-text>
              <b-form-row
                class="
                  col-sm-12 col-md-12 col-lg-12 col-xl-12
                  d-flex
                  justify-content-between
                "
              >
                <div class="form-group col-sm-4">
                  <b-form-group label="Produto">
                    <b-form-select hidden> </b-form-select>
                    <b-form-select
                      class="col-xl-12"
                      size="sm"
                      value-field="id"
                      text-field="nome"
                      :options="produto"
                      v-model="dadosVenda.produto"
                    >
                    </b-form-select>
                  </b-form-group>
                </div>

                <div class="form-group col-md-5 col-sm-12 col-lg-5 col-xl-2">
                  <b-form-group label="Quantidade">
                    <b-form-input
                      placeholder="Quantidade"
                      class="col-sm-12"
                      size="sm"
                      v-model="dadosVenda.quantidade"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-2">
                  <b-form-group label="Valor">
                    <b-form-input
                      placeholder="Valor"
                      class="col-sm-12"
                      size="sm"
                      v-model="dadosVenda.valor"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-1">
                  <b-form-group label="Unidade">
                    <b-form-input
                      placeholder="UND"
                      class="col-sm-12"
                      size="sm"
                      v-model="dadosVenda.unidade"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div
                  class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-1 mt-4"
                >
                  <b-button
                    @click="adicionarProdutoVendas"
                    variant="success"
                    size="sm"
                    class="m-2"
                    >Adicionar</b-button
                  >
                </div>

                <div
                  class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-1 mt-4"
                >
                  <b-button
                    variant="info"
                    size="sm"
                    class="m-2"
                    @click="clearVenda"
                    >Limpar</b-button
                  >
                </div>
              </b-form-row>
            </b-card-text>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import { http } from "../../config/config";
export default {
  data() {
    return {
      produto: [{}],
      dadosVenda: {
        produto: "",
        quantidade: 0,
        valor: 0,
        unidade: "",
      },
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
</style>