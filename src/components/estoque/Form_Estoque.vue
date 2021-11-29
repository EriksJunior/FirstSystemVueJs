<template>
  <div id="formEstoque">
    <div id="inputsEstoque">
      <h1 style="text-align: center; margin-bottom: 10px; color: white">
        Movimentação de estoque
      </h1>
      <div id="cardGeral">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Momentação Estoque" active>
              <div id="cardEstoque">
                <b-card-text>
                  <form class="row">
                    <div class="form-group col-md-4 col-sm-4 col-lg-4 col-xl-3">
                      <b-form-group label="Produto">
                        <b-form-select
                          class="col-xl-11"
                          size="sm"
                          value-field="nome"
                          text-field="nome"
                          :options="produto"
                        >
                        </b-form-select>
                      </b-form-group>
                    </div>

                    <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-2">
                      <b-form-group label="Quantidade">
                        <b-form-input
                          class="col-sm-12"
                          size="sm"
                        ></b-form-input>
                      </b-form-group>
                    </div>

                    <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-2">
                      <b-form-group label="Numero NFe">
                        <b-form-input
                          class="col-sm-12"
                          size="sm"
                        ></b-form-input>
                      </b-form-group>
                    </div>

                    <div class="form-group col-md-4 col-sm-4 col-lg-4 col-xl-2">
                      <b-form-group label="Tipo movimentação">
                        <b-form-select
                          class="col-xl-12"
                          size="sm"
                          :options="tipoMov"
                        >
                        </b-form-select>
                      </b-form-group>
                    </div>

                    <div class="form-group col-md-4 col-sm-4 col-lg-4 col-xl-3">
                      <div
                        id="tituloMaisModal"
                        class="d-flex justify-content-between mb-2"
                      >
                        Nome fornecedor

                        <!-- Modal fornecedor -->
                        <ModalFornecedor class="mr-2" />
                        <!-- Modal fornecedor -->
                      </div>

                      <b-form-select
                        class="col-xl-12"
                        size="sm"
                        value-field="razao_social"
                        text-field="razao_social"
                        :options="fornecedor"
                      >
                      </b-form-select>
                    </div>
                  </form>
                  <div>
                    <b-row class="justify-content-md-center">
                      <b-col col md="12" lg="4" xl="2">
                        <b-button
                          variant="success"
                          class="col-md-12 mt-2"
                          size="sm"
                          >Salvar</b-button
                        >
                      </b-col>

                      <b-col col md="12" lg="4" xl="2">
                        <b-button
                          variant="danger"
                          class="col-md-12 col-lg-12 mt-2"
                          size="sm"
                          >Deletar</b-button
                        >
                      </b-col>

                      <b-col col md="12" lg="4" xl="2">
                        <b-button class="col-md-12 mt-2" size="sm"
                          >Novo</b-button
                        >
                      </b-col>
                    </b-row>
                  </div>
                </b-card-text>
              </div>
            </b-tab>
            <b-tab title="Pesquisar">
              <div id="positionTable">
                <TableEstoque />
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "../../config/config";
import TableEstoque from "./Table_Estoque.vue";
import ModalFornecedor from "./Modal_Fornecedor.vue";
export default {
  components: {
    TableEstoque,
    ModalFornecedor,
  },
  props: {
    dadosProdutoOutroForm: {
      type: Array,
    },
  },
  data() {
    return {
      produto: [],
      fornecedor: [],
      tipoMov: [
        { value: "tipoMovimentacao", text: "Compra" },
        { value: "tipoMovimentacao", text: "Venda" },
        { value: "tipoMovimentacao", text: "Devolução" },
        { value: "tipoMovimentacao", text: "Ajuste Entrada" },
        { value: "tipoMovimentacao", text: "Ajuste Saída" },
      ],
    };
  },
  methods: {
    async dadosProduto() {
      try {
        const { data } = await http.get("/produto");
        this.produto = data;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async pegarDadosFornecedor() {
      try {
        const { data } = await http.get("/fornecedor");
        this.fornecedor = data;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.dadosProduto();
    this.pegarDadosFornecedor();
  },
};
</script>

<style>
#formEstoque {
  margin: 0 auto;
  width: 90%;
}

#tituloTabela {
  text-align: center;
}

#tituloTabela h3 {
  color: rgb(9, 134, 134) !important;
  font-family: monospace;
  font-style: italic;
  font-weight: bold;
}

#tabelaDeProduto {
  margin-top: 50px;
}

#positionTable {
  margin-top: 15px;
}

#tituloMaisModal {
}
</style>