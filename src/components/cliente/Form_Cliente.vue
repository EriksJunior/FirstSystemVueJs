<template>
  <div id="formCliente">
    <div id="inputsCliente">
      <h1
        style="
          text-align: center;
          margin-bottom: 10px;
          margin-top: 70px;
          color: white;
        "
      >
        Cadastro de Clientes
      </h1>
      <b-card bg-variant="light">
        <form class="row">
          <div class="form-group col-md-12 col-sm-6 col-lg-7 col-xl-7">
            <b-form-group label="Nome:">
              <b-form-input
                v-model="this.idCliente"
                class="col-sm-1"
                disabled
                hidden
              ></b-form-input>

              <b-form-input
                v-model="dadosCliente.nome"
                class="col-sm-12"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-4">
            <b-form-group label="CPF/CNPJ:">
              <b-form-input
                v-model="dadosCliente.cpfcnpj"
                class="col-sm-12"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-6 col-md-12 col-lg-7 col-xl-6">
            <b-form-group label="Endereço:">
              <b-form-input v-model="dadosCliente.endereco"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-8 col-lg-5 col-xl-4">
            <b-form-group label="Bairro:">
              <b-form-input
                v-model="dadosCliente.bairro"
                class="col-sm-12"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-2 col-md-4 col-lg-3 col-xl-2">
            <b-form-group label="Numero:">
              <b-form-input
                v-model="dadosCliente.numero"
                class="col-sm-12"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-8 col-lg-6 col-xl-5">
            <b-form-group label="Cidade:">
              <b-form-input
                v-model="dadosCliente.cidade"
                class="col-sm-12"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-2 col-md-4 col-lg-2 col-xl-2">
            <b-form-group label="UF:">
              <b-form-input
                v-model="dadosCliente.uf"
                class="col-sm-9 col-lg-12"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-12 col-lg-5 col-xl-4">
            <b-form-group label="Data de nascimento:">
              <b-form-input
                v-model="dadosCliente.data_nasc"
                type="date"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <b-form-group label="Observação:">
              <b-form-textarea
                id="textarea"
                placeholder="Preencha algo..."
                rows="5"
                v-model="dadosCliente.obs"
              ></b-form-textarea>
            </b-form-group>
          </div>
        </form>

        <div id="btnCad">
          <b-row class="justify-content-md-center">
            <b-col col md="12" lg="4" xl="3">
              <b-button
                variant="success"
                class="col-md-12 mt-2"
                size="lg"
                @click="salvarCliente"
                >Salvar</b-button
              >
            </b-col>

            <b-col col md="12" lg="4" xl="3">
              <b-button
                variant="danger"
                class="col-md-12 col-lg-12 mt-2"
                size="lg"
                >Deletar</b-button
              >
            </b-col>

            <b-col col md="12" lg="4" xl="3">
              <b-button
                variant="info"
                class="col-md-12 mt-2"
                size="lg"
                @click="listarDadosTabela"
                >Pesquisar</b-button
              >
            </b-col>

            <b-col col md="12" lg="4" xl="3">
              <b-button class="col-md-12 mt-2" size="lg" @click="limparDados"
                >Novo</b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { http } from "../../config/config";

export default {
  props: {
    envInfoFromForm: {
      type: Object,
    },
  },
  data() {
    return {
      dadosAparecerSumirTabela: true,
      aparecerTabela: "",
      dadosTabela: "display: none;",
      idCliente: null,
      dadosCliente: {
        nome: "",
        cpfcnpj: "",
        endereco: "",
        bairro: "",
        numero: "",
        cidade: "",
        uf: "",
        data_nasc: "",
        obs: "",
      },
    };
  },
  methods: {
    async salvarCliente() {
      try {
        const { data } = await http.post("/cliente", this.dadosCliente);
        this.idCliente = data.id;
        console.log(this.idCliente);
        this.limparDados();
        alert("Cliente salvo");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    limparDados() {
      this.idCliente = "";
      this.dadosCliente.nome = "";
      this.dadosCliente.cpfcnpj = "";
      this.dadosCliente.endereco = "";
      this.dadosCliente.bairro = "";
      this.dadosCliente.numero = "";
      this.dadosCliente.cidade = "";
      this.dadosCliente.uf = "";
      this.dadosCliente.data_nasc = "";
      this.dadosCliente.obs = "";
    },
    async listarDadosTabela() {
      if (this.dadosAparecerSumirTabela === true) {
        this.dadosTabela = "color: black";
        this.$emit("listarDadosTabela", this.dadosTabela);
        this.dadosAparecerSumirTabela = false; // primeiro parametro o nome do evento, segundo o evento
        try {
          const data = await http.get("/cliente");
          this.$emit("dadosCliente", data);
          return data;
        } catch (error) {
          console.log(error);
        }
      } else if (this.dadosAparecerSumirTabela !== true) {
        this.dadosTabela = "display: none;";
        this.$emit("listarDadosTabela", this.dadosTabela);
        this.dadosAparecerSumirTabela = true; // primeiro parametro o nome do evento, segundo o evento
      }
    },
  },
  watch: {
    envInfoFromForm() {
      Object.assign(this.dadosCliente, this.envInfoFromForm);
    },
  },
};
</script>

<style>
#formCliente {
  width: 50%;
  height: 100%;
}

#inputsCliente {
  width: 100%;
  margin-left: 10px;
  height: 100%;
}
</style>