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
                size="sm"
                placeholder="Nome produto"
                v-model="dadosProdutos.nome"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-6 col-md-12 col-lg-7 col-xl-3">
            <b-form-group label="Marca:">
              <b-form-input
                placeholder="Marca"
                size="sm"
                v-model="dadosProdutos.marca"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-8 col-lg-5 col-xl-3">
            <b-form-group label="Quantidade:">
              <b-form-input
                class="col-sm-12"
                size="sm"
                disabled
                placeholder="Quantidade"
                v-model="quantidade"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-2 col-md-4 col-lg-3 col-xl-4">
            <b-form-group label="Preço de custo">
              <b-form-input
                class="col-sm-12"
                size="sm"
                placeholder="Preço do custo"
                v-model="dadosProdutos.preco_custo"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-8 col-lg-6 col-xl-4">
            <b-form-group label="Preço de venda:">
              <b-form-input
                class="col-sm-12"
                size="sm"
                placeholder="Preço de venda"
                v-model="dadosProdutos.preco_venda"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-2 col-md-4 col-lg-2 col-xl-4">
            <b-form-group label="Categoria:">
              <b-form-input
                class="col-sm-9 col-lg-12"
                size="sm"
                placeholder="Categoria"
                v-model="dadosProdutos.categoria"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-12 col-lg-5 col-xl-4">
            <b-form-group label="Data de cadastro:">
              <b-form-input
                type="date"
                size="sm"
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
                size="sm"
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
                size="sm"
                @click="saveProduto"
                >Salvar</b-button
              >
            </b-col>

            <b-col col md="12" lg="4" xl="3">
              <b-button
                variant="danger"
                class="col-md-12 col-lg-12 mt-2"
                size="sm"
                >Deletar</b-button
              >
            </b-col>

            <b-col col md="12" lg="4" xl="3">
              <b-button
                variant="info"
                class="col-md-12 mt-2 teste"
                size="sm"
                @click="getProduto"
                >Pesquisar</b-button
              >
            </b-col>

            <b-col col md="12" lg="4" xl="3">
              <b-button class="col-md-12 mt-2" size="sm" @click="limparDados"
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
    dadosProdutoTabela: {
      type: Object,
    },
    updateTableForm: {
      type: Boolean,
    },
  },
  data() {
    return {
      quantidade: "",
      dadosProdutos: {
        id: "",
        nome: "",
        marca: "" || null,
        preco_custo: "" || null,
        preco_venda: "" || null,
        categoria: "" || null,
        data_cadastro: "" || null,
        obs: "" || null,
      },
    };
  },
  methods: {
    async editarProduto() {
      try {
        const { data } = await http.put(
          `/produto/${this.dadosProdutos.id}`,
          this.dadosProdutos
        );
        alert("Cadastro do produto atualizado com sucesso!");
        this.getProduto();
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    limparDados() {
      (this.dadosProdutos.id = ""),
        (this.dadosProdutos.nome = ""),
        (this.dadosProdutos.marca = ""),
        (this.quantidade = ""),
        (this.dadosProdutos.preco_custo = ""),
        (this.dadosProdutos.preco_venda = ""),
        (this.dadosProdutos.categoria = ""),
        (this.dadosProdutos.data_cadastro = ""),
        (this.dadosProdutos.obs = "");
    },

    async saveProduto() {
      try {
        if (this.dadosProdutos.id !== "") {
          this.editarProduto();
          this.limparDados();
          return;
        }
        const { data } = await http.post("/produto", this.dadosProdutos);
        alert("Produto cadastrado com sucesso!");
        this.limparDados();
        this.getProduto();
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async getProduto() {
      try {
        const { data } = await http.get("/produto");
        this.$emit("buscarDadosProduto", data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async getStockProductsById(idProduto) {
      const { data } = await http.get(`/produto/estoqueTotal/${idProduto}`);
      this.quantidade = data[0][0].quantidadeTotal;
      return data;
    },
  },
  watch: {
    dadosProdutoTabela() {
      Object.assign(this.dadosProdutos, this.dadosProdutoTabela);
      this.dadosProdutos.data_cadastro =
        this.dadosProdutoTabela.data_cadastro.split("T")[0];
      this.getStockProductsById(this.dadosProdutos.id);
    },
    updateTableForm() {
      this.getProduto();
    },
  },
};
</script>

<style>
#formProduto {
  width: 100%;
  height: 100%;
}

#inputsProduto {
  margin: 0 auto;
  width: 90%;
  height: 100%;
}
</style>