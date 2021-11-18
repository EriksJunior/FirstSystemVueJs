<template>
  <div id="formProduto">
    <div id="inputsProduto">
      <h1 style="text-align: center; margin-bottom: 10px; color: white">
        Cadastro de Produtos
      </h1>
      <b-card bg-variant="light">
        <form class="row">
          <b-form-input
            class="col-sm-1"
            hidden
            v-model="dadosProdutos.id"
          ></b-form-input>
          <div class="form-group col-md-12 col-sm-6 col-lg-7 col-xl-6">
            <b-form-group label="Nome:">
              <b-form-input
                class="col-sm-12"
                placeholder="Nome produto"
                v-model="dadosProdutos.nome"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-6 col-md-12 col-lg-7 col-xl-3">
            <b-form-group label="Marca:">
              <b-form-input
                placeholder="Marca"
                v-model="dadosProdutos.marca"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-8 col-lg-5 col-xl-3">
            <b-form-group label="Quantidade:">
              <b-form-input
                class="col-sm-12"
                placeholder="Quantidade"
                v-model="dadosProdutos.quantidade"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-2 col-md-4 col-lg-3 col-xl-4">
            <b-form-group label="Preço de custo">
              <b-form-input
                class="col-sm-12"
                placeholder="Preço do custo"
                v-model="dadosProdutos.preco_custo"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-8 col-lg-6 col-xl-4">
            <b-form-group label="Preço de venda:">
              <b-form-input
                class="col-sm-12"
                placeholder="Preço de venda"
                v-model="dadosProdutos.preco_venda"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-2 col-md-4 col-lg-2 col-xl-4">
            <b-form-group label="Categoria:">
              <b-form-input
                class="col-sm-9 col-lg-12"
                placeholder="Categoria"
                v-model="dadosProdutos.categoria"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-12 col-lg-5 col-xl-4">
            <b-form-group label="Data de cadastro:">
              <b-form-input
                type="date"
                v-model="dadosProdutos.data_cadastro"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-md-12 col-sm-12 col-lg-12 col-xl-8">
            <b-form-group label="Observação:">
              <b-form-textarea
                id="textarea"
                placeholder="Preencha algo..."
                rows="5"
                v-model="dadosProdutos.obs"
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
                @click="saveProduto"
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
                class="col-md-12 mt-2 teste"
                size="lg"
                @click="getProduto"
                >Pesquisar</b-button
              >
            </b-col>

            <b-col col md="12" lg="4" xl="3">
              <b-button class="col-md-12 mt-2" size="lg">Novo</b-button>
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
  data() {
    return {
      dadosProdutos: {
        id: "",
        nome: "",
        marca: "",
        quantidade: "",
        preco_custo: "",
        preco_venda: "",
        categoria: "",
        data_cadastro: "",
        obs: "",
      },
    };
  },
  methods: {
    limparDados() {
      (this.dadosProdutos.id = ""),
        (this.dadosProdutos.nome = ""),
        (this.dadosProdutos.marca = ""),
        (this.dadosProdutos.quantidade = ""),
        (this.dadosProdutos.preco_custo = ""),
        (this.dadosProdutos.preco_venda = ""),
        (this.dadosProdutos.categoria = ""),
        (this.dadosProdutos.data_cadastro = ""),
        (this.dadosProdutos.obs = "");
    },
    async saveProduto() {
      try {
        const { data } = await http.post("/produto", this.dadosProdutos);
        alert("Produto cadastrado com sucesso!");
        this.limparDados();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async getProduto() {
      try {
        const { data } = await http.get("/produto");
        this.$emit('buscarDadosProduto', data)
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
#formProduto {
  width: 50%;
  height: 100%;
}

#inputsProduto {
  width: 100%;
  margin-left: 10px;
  height: 100%;
}
</style>