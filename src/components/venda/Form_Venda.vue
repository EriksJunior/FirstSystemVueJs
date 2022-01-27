<template>
  <div id="cardContainer">
    <div id="tabContainer">
      <b-card no-body>
        <b-tabs card v-model="tabIndex">
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
                      v-model="dadosVenda.tipo_venda"
                      >Venda</b-form-radio
                    >
                    <b-form-radio
                      name="venda"
                      value="Orçamento"
                      v-model="dadosVenda.tipo_venda"
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
                        :options="nomeCliente"
                        v-model="dadosVenda.id_cliente"
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

                <DropDownProduto :idVenda="dadosVenda.id" />
                <div
                  class="
                    col-sm-12 col-md-12 col-lg-12 col-xl-12
                    d-flex
                    justify-content-end
                  "
                >
                  <b-button variant="success" @click="saveVenda"
                    >Salvar</b-button
                  >
                </div>
              </b-form-row>
            </b-card-text>
          </b-tab>

          <b-tab :title="`N° da venda: ${dadosVenda.id}`" disabled> </b-tab>

          <b-tab title="Pesquisa">
            <b-card-text>
              <PesquisaVenda
                @dadosDaTabela="dataSaleByTable = $event"
                @eventoMudarTab="tabIndex = $event"
              />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import { http } from "../../config/config";
import DropDownProduto from "./DropDownProduto_Venda.vue";
import PesquisaVenda from "./Tabela_Venda.vue";
import moment from "moment";
export default {
  props: {},
  components: {
    DropDownProduto,
    PesquisaVenda,
  },
  data() {
    return {
      tabIndex: 1,
      nomeCliente: [],
      dadosVenda: {
        id: 0,
        id_cliente: "",
        tipo_venda: "",
        data_venda: "",
        data_entrega: "",
      },
      dataSaleByTable: {},
    };
  },
  methods: {
    async getCliente() {
      const { data } = await http.get("/cliente");
      this.nomeCliente = data;
      return data;
    },

    async saveVenda() {
      try {
        if (this.dadosVenda.id === 0) {
          const { data } = await http.post("/venda", this.dadosVenda);
          this.dadosVenda.id = data.id;
          alert("mov salvaaa");
          return data;
        } else if (this.dadosVenda.id !== 0) {
          this.updateVenda(this.dadosVenda.id);
          alert("Venda atualizada com sucesso!");
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async updateVenda(id) {
      try {
        const { data } = await http.put(`/venda/${id}`, this.dadosVenda);
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async saveProdutoVenda() {
      try {
        const { data } = await http.post("/movVenda");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getCliente();
  },
  watch: {
    dataSaleByTable() {
      this.dadosVenda.id = this.dataSaleByTable.id;
      this.dadosVenda.id_cliente = this.dataSaleByTable.id_cliente;
      this.dadosVenda.tipo_venda = this.dataSaleByTable.tipo_venda;
      this.dadosVenda.data_venda = moment(
        this.dataSaleByTable.data_venda
      ).format("YYYY-MM-DD");
      this.dadosVenda.data_entrega = moment(
        this.dataSaleByTable.data_entrega
      ).format("YYYY-MM-DD");
    },
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