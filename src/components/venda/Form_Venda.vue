<template>
  <div id="cardContainer">
    <div id="tabContainer">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Venda" active>
            <b-card-text>
              <b-form-row
                class="col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex"
              >
                <div
                  class="
                    d-flex
                    justify-content-between
                    col-sm-12 col-md-12 col-lg-12 col-xl-12
                  "
                >
                  <div class="col-xl-3">
                    <b-form-group label="Data da venda">
                      <b-form-input
                        size="sm"
                        hidden
                        v-model="dadosVenda.id_venda"
                      ></b-form-input>
                      <b-form-input
                        size="sm"
                        type="date"
                        v-model="dadosVenda.data_venda"
                      ></b-form-input>
                    </b-form-group>
                  </div>

                  <div class="d-flex">
                    <b-form-radio
                      name="venda"
                      value="Venda"
                      v-model="dadosVenda.tipoVenda"
                      >Venda</b-form-radio
                    >
                    <b-form-radio
                      name="venda"
                      value="Orçamento"
                      v-model="dadosVenda.tipoVenda"
                      class="ml-3"
                      >Orçamento</b-form-radio
                    >
                  </div>
                </div>

                <div
                  class="
                    form-group
                    col-sm-12 col-md-12 col-lg-12 col-xl-12
                    d-flex
                    mt-2
                  "
                >
                  <div class="form-group col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <b-form-group label="Cliente">
                      <b-form-select
                        class="col-xl-12"
                        size="sm"
                        text-field="nome"
                        value-field="id"
                        :options="dadosVenda.nomeCliente"
                      >
                      </b-form-select>
                    </b-form-group>
                  </div>

                  <div class="form-group col-sm-5 col-md-5 col-lg-4 col-xl-4">
                    <b-form-group label="Data da entrega">
                      <b-form-input
                        class="col-sm-12 col-xl-12"
                        size="sm"
                        type="date"
                        v-model="dadosVenda.data_entrega"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>

                <DropDownProduto />
                <div
                  class="
                    col-sm-12 col-md-12 col-lg-12 col-xl-12
                    d-flex
                    justify-content-end
                  "
                >
                  <b-button variant="success" size="sm" @click="saveVenda"
                    >Salvar</b-button
                  >
                </div>
              </b-form-row>
            </b-card-text>
          </b-tab>

          <b-tab :title="`N° da venda: ${dadosVenda.id_venda}`" disabled>
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
import DropDownProduto from "./DropDownProduto_Venda.vue";
export default {
  components: {
    DropDownProduto,
  },
  data() {
    return {
      dadosVenda: {
        id: "",
        nomeCliente: {},
        tipoVenda: "",
        data_venda: "",
        data_entrega: "",
        nomeProdutoVenda: [],
      },
    };
  },
  methods: {
    async getCliente() {
      const { data } = await http.get("/cliente");
      this.dadosVenda.nomeCliente = data;
      return data;
    },

    async saveVenda() {
      try {
        console.log(this.dadosVenda);
        const { data } = await http.post("/venda", this.dadosVenda);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getCliente();
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