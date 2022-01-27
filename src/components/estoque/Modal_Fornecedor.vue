<template>
  <div>
    <div id="iconModal">
      <b-icon-plus-square-fill
        id="iconPlus"
        scale="2"
        v-b-modal.modal-xl
        size="sm"
        variant="primary"
      ></b-icon-plus-square-fill>
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
        <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-4">
          <b-form-input hidden v-model="infoFornecedor.id"></b-form-input>
          <b-form-group label="Razão Social">
            <b-form-input
              class="col-sm-12"
              size="sm"
              placeholder="Razão Social"
              v-model="infoFornecedor.razao_social"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-4">
          <b-form-group label="Nome Fantasia">
            <b-form-input
              class="col-sm-12"
              size="sm"
              placeholder="Nome Fantasia"
              v-model="infoFornecedor.nome_fantasia"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-4">
          <b-form-group label="Endereço">
            <b-form-input
              class="col-sm-12"
              size="sm"
              placeholder="Endereço"
              v-model="infoFornecedor.endereco"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-4">
          <b-form-group label="Bairro">
            <b-form-input
              class="col-sm-12"
              size="sm"
              placeholder="Bairro"
              v-model="infoFornecedor.bairro"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-1">
          <b-form-group label="Numero">
            <b-form-input
              class="col-sm-12"
              size="sm"
              placeholder="N°"
              v-model="infoFornecedor.numero"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-2">
          <b-form-group label="Cidade">
            <b-form-input
              class="col-sm-12"
              size="sm"
              placeholder="Cidade"
              v-model="infoFornecedor.cidade"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-1">
          <b-form-group label="UF">
            <b-form-input
              class="col-sm-12"
              size="sm"
              placeholder="UF"
              v-model="infoFornecedor.uf"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-2">
          <b-form-group label="CNPJ">
            <b-form-input
              class="col-sm-12"
              size="sm"
              placeholder="CNPJ"
              v-model="infoFornecedor.cnpj"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-2">
          <b-form-group label="IE">
            <b-form-input
              class="col-sm-12"
              size="sm"
              placeholder="IE"
              v-model="infoFornecedor.ie"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-2">
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

      <div class="table-responsive" id="tabelaDeFornecedores">
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
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="check-square-fill"
                  scale="2"
                  variant="success"
                  @click="editarFornecedor(item.id)"
                ></b-icon>
              </td>
              <td>
                <b-icon
                  class="icones ml-3"
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
  </div>
</template>

<script>
import { http } from "../../config/config";
export default {
  data() {
    return {
      dadosFornecedorFromEstoque: false,
      infoFornecedor: {
        id: "",
        razao_social: "",
        nome_fantasia: "" || null,
        endereco: "" || null,
        bairro: "" || null,
        numero: "" || null,
        cidade: "" || null,
        uf: "" || null,
        cnpj: "" || null,
        ie: "" || null,
        telefone: "" || null,
      },
      fornecedor: [],
    };
  },
  methods: {
    async pegarDadosFornecedor() {
      try {
        const { data } = await http.get("/fornecedor");
        this.fornecedor = data;
        this.$emit("updateModalSuppliersFromInventory");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async salvarFornecedor() {
      try {
        if (this.infoFornecedor.id !== "") {
          this.atualizarFornecedor();
          this.limparDadosFornecedor();
          alert("Dados do fornecedor atualizados!");
          this.pegarDadosFornecedor();
          return;
        }
        const { data } = await http.post("/fornecedor", this.infoFornecedor);
        alert("Fornecedor Salvo com sucesso");
        this.limparDadosFornecedor();
        this.pegarDadosFornecedor();
        this.$emit("getModalSuppliersFromInventory");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async editarFornecedor(idFornecedor) {
      try {
        const { data } = await http.get(`/fornecedor/${idFornecedor}`);
        Object.assign(this.infoFornecedor, data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async excluirFornecedor(idFornecedor) {
      try {
        const { data } = await http.delete(`/fornecedor/${idFornecedor}`);
        alert("Fornecedor deletado com sucesso!");
        this.pegarDadosFornecedor();
        this.$emit("deleteModalSuppliersFromInventory");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async atualizarFornecedor() {
      const { data } = await http.put(
        `/fornecedor/${this.infoFornecedor.id}`,
        this.infoFornecedor
      );
      return data;
    },
    limparDadosFornecedor() {
      (this.infoFornecedor.id = ""),
        (this.infoFornecedor.razao_social = ""),
        (this.infoFornecedor.nome_fantasia = ""),
        (this.infoFornecedor.endereco = ""),
        (this.infoFornecedor.bairro = ""),
        (this.infoFornecedor.numero = null),
        (this.infoFornecedor.cidade = ""),
        (this.infoFornecedor.uf = ""),
        (this.infoFornecedor.cnpj = ""),
        (this.infoFornecedor.ie = ""),
        (this.infoFornecedor.telefone = "");
    },
  },
  mounted() {
    this.pegarDadosFornecedor();
  },
};
</script>

<style>
#tituloTabela {
  text-align: center;
}

#tituloTabela h3 {
  color: rgb(9, 134, 134) !important;
  font-family: monospace;
  font-style: italic;
  font-weight: bold;
}

#tabelaDeFornecedores {
  margin-top: 50px;
}

#iconPlus {
  outline: none !important;
  cursor: pointer;
}
</style>
