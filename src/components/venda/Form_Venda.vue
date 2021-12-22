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
                      <b-form-input size="sm" hidden></b-form-input>
                      <b-form-input size="sm" type="date"></b-form-input>
                    </b-form-group>
                  </div>

                  <div class="d-flex">
                    <b-form-radio name="venda">Venda</b-form-radio>
                    <b-form-radio name="venda" class="ml-3"
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
                        :options="nomeCliente"
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
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>

                <div
                  class="
                    form-group
                    dadosProduto
                    col-sm-12 col-md-12 col-lg-12 col-xl-12
                  "
                >
                  <b-navbar toggleable>
                    <b-navbar-toggle target="navbar-toggle-collapse" id="teste">
                      <template #default="{ expanded }">
                        <p>
                          <b-icon
                            v-if="expanded"
                            icon="plus-circle-fill"
                            variant="danger"
                            animation="spin-pulse"
                          ></b-icon>
                          <b-icon
                            v-else
                            icon="plus-square-fill"
                            variant="info"
                          ></b-icon>
                          Selecionar Produto
                        </p>
                      </template>
                    </b-navbar-toggle>

                    <b-collapse id="navbar-toggle-collapse" is-nav>
                      <b-navbar-nav class="ml-auto">
                        <b-card
                          bg-variant="light"
                          text-variant="dark"
                          class="mt-2"
                        >
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
              </b-form-row>
            </b-card-text>
          </b-tab>

          <b-tab title="N° da venda: 4566" disabled> </b-tab>

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
      nomeCliente: [],
      nomeProduto: [
        {
          nome: "teste",
          value: "id",
        },
      ],
    };
  },
  methods: {
    async getCliente() {
      const { data } = await http.get("/cliente");
      this.nomeCliente = data;
      return data;
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

#teste {
  border: none !important;
}
</style>