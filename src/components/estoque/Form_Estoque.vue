<template>
  <div id="formEstoque">
    <div id="inputsEstoque">
      <h1 style="text-align: center; margin-bottom: 10px; color: white">
        Movimentação de estoque
      </h1>
      <div id="cardGeral">
        <b-card no-body>
          <b-tabs card v-model="tabIndex">
            <b-tab title="Movimentação Estoque" active>
              <div id="cardEstoque">
                <b-card-text>
                  <form class="row">
                    <div class="form-group col-md-4 col-sm-4 col-lg-4 col-xl-3">
                      <b-form-group label="Produto">
                        <b-form-select hidden v-model="dadosMovEstoque.id">
                        </b-form-select>
                        <b-form-select
                          class="col-xl-11"
                          size="sm"
                          value-field="id"
                          text-field="nome"
                          v-model="dadosMovEstoque.id_produto"
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
                          v-model="dadosMovEstoque.quantidade"
                        ></b-form-input>
                      </b-form-group>
                    </div>

                    <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-2">
                      <b-form-group label="Numero NFe">
                        <b-form-input
                          class="col-sm-12"
                          size="sm"
                          v-model="dadosMovEstoque.numero_nfe"
                        ></b-form-input>
                      </b-form-group>
                    </div>

                    <div class="form-group col-md-4 col-sm-4 col-lg-4 col-xl-2">
                      <b-form-group label="Tipo movimentação">
                        <b-form-select
                          class="col-xl-12"
                          size="sm"
                          value-field="text"
                          :options="tipoMov"
                          v-model="dadosMovEstoque.tipo_movimentacao"
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
                        <ModalFornecedor
                          class="mr-2"
                          @getModalSuppliersFromInventory="pegarDadosFornecedor"
                          @deleteModalSuppliersFromInventory="
                            pegarDadosFornecedor
                          "
                          @updateModalSuppliersFromInventory="
                            pegarDadosFornecedor
                          "
                        />
                        <!-- Modal fornecedor -->
                      </div>

                      <b-form-select
                        class="col-xl-12"
                        size="sm"
                        value-field="id"
                        text-field="razao_social"
                        v-model="dadosMovEstoque.id_fornecedor"
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
                          @click="saveMovimentacaoEstoque"
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
                        <b-button
                          class="col-md-12 mt-2"
                          size="sm"
                          @click="limparCampos"
                          >Novo</b-button
                        >
                      </b-col>
                    </b-row>
                  </div>
                </b-card-text>
              </div>
            </b-tab>
            <b-tab title="Pesquisar">
              <b-card-text>
                <div id="positionTable">
                  <TableEstoque
                    @tableDataForStock="dataTable = $event"
                    :atualizarListagemEstoque="listagemEstoque"
                    @atualizarListagemEstoqueParaComponentePai="
                      listagemEstoque = $event
                    "
                  />
                </div>
              </b-card-text>
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
  data() {
    return {
      listagemEstoque: false,
      tabIndex: 1,
      dataTable: {},
      dadosMovEstoque: {
        id: "",
        id_produto: "",
        id_fornecedor: "" || "",
        quantidade: "",
        numero_nfe: "",
        tipo_movimentacao: "",
      },
      produto: [],
      fornecedor: [],
      tipoMov: [
        { value: "idMov", text: "Compra" },
        { value: "idMov", text: "Venda" },
        { value: "idMov", text: "Devolução" },
        { value: "idMov", text: "Ajuste Entrada" },
        { value: "idMov", text: "Ajuste Saída" },
      ],
    };
  },
  methods: {
    indexPage() {
      this.tabIndex--;
    },
    limparCampos() {
      (this.dadosMovEstoque.id = ""),
        (this.dadosMovEstoque.id_produto = ""),
        (this.dadosMovEstoque.id_fornecedor = ""),
        (this.dadosMovEstoque.quantidade = ""),
        (this.dadosMovEstoque.numero_nfe = ""),
        (this.dadosMovEstoque.tipo_movimentacao = "");
    },
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

    async saveMovimentacaoEstoque() {
      try {
        if (this.dadosMovEstoque.id !== "") {
          this.updateMovEstoque();
          this.limparCampos();
          alert("Movimentação atualizada com sucesso!");
          return;
        }
        const { data } = await http.post("/movestoque", this.dadosMovEstoque);
        alert("Movimentação salva com sucesso!");
        this.dadosTabelaMovEstoque = data;
        this.limparCampos();
        return data;
      } catch (error) {
        console.log(error.response.data);
      }
    },

    async updateMovEstoque() {
      try {
        const { data } = await http.put(
          `/movestoque/${this.dadosMovEstoque.id}`,
          this.dadosMovEstoque
        );
        this.listagemEstoque = true;
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
  watch: {
    pegarDadosFornecedor() {},
    dataTable() {
      (this.dadosMovEstoque.id = this.dataTable.id),
        (this.dadosMovEstoque.id_produto = this.dataTable.id_produto),
        (this.dadosMovEstoque.id_fornecedor = this.dataTable.id_fornecedor),
        (this.dadosMovEstoque.quantidade = this.dataTable.quantidade),
        (this.dadosMovEstoque.numero_nfe = this.dataTable.numero_nfe),
        (this.dadosMovEstoque.tipoMov = this.dataTable.tipoMov);
      this.indexPage();
    },
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
</style>