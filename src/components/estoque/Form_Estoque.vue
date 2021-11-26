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
                        cancel-variant="primary"
                        ok-only
                        header-close-variant="danger"
                        footer-bg-variant="info"
                        header-bg-variant="info"
                        header-text-variant="light"
                      >
                        <form class="row">
                          <div
                            class="
                              form-group
                              col-md-7 col-sm-4 col-lg-5 col-xl-4
                            "
                          >
                            <b-form-input
                              hidden
                              v-model="infoFornecedor.id"
                            ></b-form-input>
                            <b-form-group label="Razão Social">
                              <b-form-input
                                class="col-sm-12"
                                size="sm"
                                placeholder="Razão Social"
                                v-model="infoFornecedor.razao_social"
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
                                v-model="infoFornecedor.nome_fantasia"
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
                                v-model="infoFornecedor.endereco"
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
                                v-model="infoFornecedor.bairro"
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
                                v-model="infoFornecedor.numero"
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
                                v-model="infoFornecedor.cidade"
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
                                v-model="infoFornecedor.uf"
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
                                v-model="infoFornecedor.cnpj"
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
                                v-model="infoFornecedor.ie"
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
                                v-model="infoFornecedor.telefone"
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
                                @click="salvarFornecedor"
                                >Salvar</b-button
                              >
                            </b-col>

                            <b-col col md="12" lg="4" xl="1">
                              <b-button
                                class="col-md-12 mt-2"
                                size="md"
                                @click="limparDadosFornecedor"
                                >Novo</b-button
                              >
                            </b-col>
                          </b-row>
                        </div>

                        <div id="tabelaDeProduto">
                          <div id="tituloTabela">
                            <h3><u>Listagem</u></h3>
                          </div>
                          <table class="table table-dark">
                            <thead>
                              <tr>
                                <th scope="col">Razão Social</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Cidade</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Excluir</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in fornecedor" :key="item.id">
                                <td>
                                  {{ item.razao_social }}
                                </td>
                                <td>
                                  {{ item.endereco }}
                                </td>
                                <td>
                                  {{ item.cidade }}
                                </td>
                                <td>
                                  {{ item.telefone }}
                                </td>
                                <td style="text-align: center">
                                  <b-icon
                                    class="icones"
                                    icon="check-square-fill"
                                    scale="2"
                                    variant="success"
                                    @click="editarFornecedor(item.id)"
                                  ></b-icon>
                                </td>
                                <td style="text-align: center">
                                  <b-icon
                                    class="icones"
                                    icon="x-square-fill"
                                    scale="2"
                                    variant="danger"
                                    @click="excluirFornecedor(item.id)"
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
        id: "",
        razao_social: "",
        nome_fantasia: "",
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
    async salvarFornecedor() {
      try {
        if (this.infoFornecedor.id !== "") {
          alert("gfd");
          return;
        }
        const { data } = await http.post("/fornecedor", this.infoFornecedor);
        alert("Fornecedor Salvo com sucesso");
        this.limparDadosFornecedor();
        this.pegarDadosFornecedor();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async editarFornecedor(idFornecedor) {
      try {
        const { data } = await http.get(`/fornecedor/${idFornecedor}`);
        (this.infoFornecedor.id = data.id),
          (this.infoFornecedor.razao_social = data.razao_social),
          (this.infoFornecedor.nome_fantasia = data.nome_fantasia),
          (this.infoFornecedor.endereco = data.endereco),
          (this.infoFornecedor.bairro = data.bairro),
          (this.infoFornecedor.numero = data.numero),
          (this.infoFornecedor.cidade = data.cidade),
          (this.infoFornecedor.uf = data.uf),
          (this.infoFornecedor.cnpj = data.cnpj),
          (this.infoFornecedor.ie = data.ie),
          (this.infoFornecedor.telefone = data.telefone);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async atualizarFornecedor() {},
    async excluirFornecedor(idFornecedor) {
      alert(`Deletando o fornecedor com ID: ${idFornecedor}`);
    },
    limparDadosFornecedor() {
      (this.infoFornecedor.id = ""),
        (this.infoFornecedor.razao_social = ""),
        (this.infoFornecedor.nome_fantasia = ""),
        (this.infoFornecedor.endereco = ""),
        (this.infoFornecedor.bairro = ""),
        (this.infoFornecedor.numero = ""),
        (this.infoFornecedor.cidade = ""),
        (this.infoFornecedor.uf = ""),
        (this.infoFornecedor.cnpj = ""),
        (this.infoFornecedor.ie = ""),
        (this.infoFornecedor.telefone = "");
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
</style>