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
                      <!-- <b-form-group label="Nome fornecedor">
                        <b-form-select
                          class="col-xl-12"
                          size="sm"
                          value-field="nome"
                          text-field="nome"
                          :options="fornecedor"
                        >
                        </b-form-select>
                      </b-form-group> -->

                      <!-- INICIO DO MODAL -->
                      <div class="teste">
                        Nome fornecedor
                        <b-button v-b-modal.modal-xl size="sm" variant="primary"
                          ><b-icon-plus scale="2"></b-icon-plus
                        ></b-button>
                      </div>

                      <b-modal
                        id="modal-xl"
                        size="xl"
                        title="Cadastro de Fornecedor"
                        ok-title="Fechar"
                        cancel-variant="danger"
                        ok-only
                      >
                        <form class="row">
                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-4
                            "
                          >
                            <b-form-group label="Razão Social">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="Razão Social"
                                v-model="this.infoFornecedor.razaoSocial"
                              ></b-form-input>
                            </b-form-group>
                          </div>

                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-4
                            "
                          >
                            <b-form-group label="Nome Fantasia">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="Nome Fantasia"
                                v-model="this.infoFornecedor.nomeFantasia"
                              ></b-form-input>
                            </b-form-group>
                          </div>

                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-4
                            "
                          >
                            <b-form-group label="Endereço">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="Endereço"
                                v-model="this.infoFornecedor.endereco"
                              ></b-form-input>
                            </b-form-group>
                          </div>

                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-4
                            "
                          >
                            <b-form-group label="Bairro">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="Bairro"
                                v-model="this.infoFornecedor.bairro"
                              ></b-form-input>
                            </b-form-group>
                          </div>

                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-1
                            "
                          >
                            <b-form-group label="Numero">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="N°"
                                v-model="this.infoFornecedor.numero"
                              ></b-form-input>
                            </b-form-group>
                          </div>

                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-2
                            "
                          >
                            <b-form-group label="Cidade">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="Cidade"
                                v-model="this.infoFornecedor.cidade"
                              ></b-form-input>
                            </b-form-group>
                          </div>

                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-1
                            "
                          >
                            <b-form-group label="UF">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="UF"
                                v-model="this.infoFornecedor.uf"
                              ></b-form-input>
                            </b-form-group>
                          </div>

                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-2
                            "
                          >
                            <b-form-group label="CNPJ">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="CNPJ"
                                v-model="this.infoFornecedor.cnpj"
                              ></b-form-input>
                            </b-form-group>
                          </div>

                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-2
                            "
                          >
                            <b-form-group label="IE">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="IE"
                                v-model="this.infoFornecedor.ie"
                              ></b-form-input>
                            </b-form-group>
                          </div>

                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-2
                            "
                          >
                            <b-form-group label="Telefone">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="Telefone"
                                v-model="this.infoFornecedor.telefone"
                              ></b-form-input>
                            </b-form-group>
                          </div>
                        </form>

                        <div id="btnSalvarNovo">
                          <b-row>
                            <b-col col md="12" lg="4" xl="1">
                              <b-button
                                variant="success"
                                class="col-md-12 mt-2"
                                size="md"
                                >Salvar</b-button
                              >
                            </b-col>

                            <b-col col md="12" lg="4" xl="1">
                              <b-button class="col-md-12 mt-2" size="md"
                                >Novo</b-button
                              >
                            </b-col>
                          </b-row>
                        </div>

                        <div id="tabelaDeProduto">
                          <div id="tituloTabela">
                            <h1 style="color: black">Listagem</h1>
                          </div>
                          <table class="table table-dark">
                            <thead>
                              <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Cidade</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Excluir</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="produto in dadosProduto"
                                :key="produto.id"
                              >
                                <td>
                                  {{ produto.id }}
                                </td>
                                <td>
                                  {{ produto.nome }}
                                </td>
                                <td>
                                  {{ produto.quantidade }}
                                </td>
                                <td>
                                  {{ produto.data_cadastro }}
                                </td>
                                <td>
                                  {{ produto.preco_custo }}
                                </td>
                                <td style="text-align: center">
                                  <b-icon
                                    class="icones"
                                    icon="check-square-fill"
                                    scale="2"
                                    variant="success"
                                  ></b-icon>
                                </td>
                                <td style="text-align: center">
                                  <b-icon
                                    class="icones"
                                    icon="x-square-fill"
                                    scale="2"
                                    variant="danger"
                                  ></b-icon>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </b-modal>
                      <!-- FIM MODAL -->

                      <b-form-select
                        class="col-xl-12"
                        size="sm"
                        value-field="nome"
                        text-field="nome"
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
                        <b-button
                          variant="info"
                          class="col-md-12 mt-2"
                          size="sm"
                          >Pesquisar</b-button
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
              <b-card-text>Tab contents 2</b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "../../config/config";
export default {
  data() {
    return {
      infoFornecedor: {
        razaoSocial: "",
        nomeFantasia: "",
        endereco: "",
        bairro: "",
        numero: "",
        cidade: "",
        uf: "",
        cnpj: "",
        ie: "",
        telefone: "",
      },
      produto: [],
      tipoMov: [
        { value: "tipoMovimentacao", text: "Compra" },
        { value: "tipoMovimentacao", text: "Venda" },
        { value: "tipoMovimentacao", text: "Devolução" },
        { value: "tipoMovimentacao", text: "Ajuste Entrada" },
        { value: "tipoMovimentacao", text: "Ajuste Saída" },
      ],
      fornecedor: [],
    };
  },
  methods: {
    async dadosProduto() {
      try {
        const { data } = await http.get("/produto");
        this.produto = data;
        console.log(this.produto);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async dadosFornecedor() {
      try {
        const { data } = await http.get("/fornecedor");
        this.fornecedor = data;
        console.log(this.fornecedor);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    teste() {
      alert("funcionando");
    },
  },
  mounted() {
    this.dadosProduto();
    this.dadosFornecedor();
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

#tituloTabela h1 {
  color: rgb(30, 30, 167) !important;
  font-family: monospace;
  font-style: italic;
  font-weight: bold;
}
</style>