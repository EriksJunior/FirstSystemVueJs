<template>
  <div class="form-group col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <b-navbar toggleable>
      <b-navbar-toggle target="navbar-toggle-collapse" id="navBarStyle">
        <template #default="{ expanded }">
          <p>
            <b-icon
              v-if="expanded"
              icon="plus-circle-fill"
              variant="danger"
              animation="spin-pulse"
            ></b-icon>
            <b-icon v-else icon="plus-square-fill" variant="info"></b-icon>
            Adicionar Produto
          </p>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-card
            bg-variant="light"
            text-variant="dark"
            class="mt-2 col-md-12 col-sm-12 col-lg-12 col-xl-12"
          >
            <form class="row">
              <b-form hidden v-model="dadosProdutoVenda.id"> </b-form>
              <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <b-form-group label="Produto">
                  <b-form-select
                    size="sm"
                    text-field="nome"
                    value-field="id"
                    :options="produto"
                    v-model="dadosProdutoVenda.id_produto"
                  >
                  </b-form-select>
                </b-form-group>
              </div>

              <div class="col-md-6 col-sm-6 col-lg-6 col-xl-2">
                <b-form-group label="Quantidade">
                  <b-form-input
                    class="col-sm-12"
                    size="sm"
                    v-model="dadosProdutoVenda.quantidade"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-6 col-sm-6 col-lg-6 col-xl-2">
                <b-form-group label="Valor unitario">
                  <b-form-input
                    class="col-sm-12"
                    size="sm"
                    v-model="dadosProdutoVenda.valor"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-6 col-sm-6 col-lg-6 col-xl-2">
                <b-form-group label="Unidade">
                  <b-form-input
                    class="col-sm-12"
                    size="sm"
                    v-model="dadosProdutoVenda.unidade"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-6 col-sm-6 col-lg-6 col-xl-2 mt-3">
                <b-button
                  variant="success"
                  class="col-md-6 col-sm-6 col-lg-6 col-xl-10 mt-3"
                  size="sm"
                  @click="adicionarProduto"
                  >Adicionar</b-button
                >
              </div>
            </form>
            <TabelaProdutoVenda
              :idVenda="idVenda"
              :dadosProdutoVenda="dadosProdutoVenda"
              :eventUpdateTable="eventProdutoByTable"
              @resetarValorBoolean="eventProdutoByTable = $event"
              @productsTableEdit="tableProductsData = $event"
              @eventUpdateTeste="teste = $event"
            />
          </b-card>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { http } from "../../config/config";
import TabelaProdutoVenda from "./TabelaProduto_Venda.vue";
export default {
  components: {
    TabelaProdutoVenda,
  },
  props: {
    idVenda: {
      type: Number,
    },
  },
  data() {
    return {
      teste: false,
      tableProductsData: {},
      eventProdutoByTable: true,
      produto: [],
      dadosProdutoVenda: {
        id: "",
        id_venda: "",
        id_produto: "",
        quantidade: "",
        valor: "",
        unidade: "",
      },
    };
  },
  methods: {
    clearVenda() {
      this.produto = [];
      this.dadosProdutoVenda.quantidade = "";
      this.dadosProdutoVenda.id = "";
      this.dadosProdutoVenda.valor = "";
      this.dadosProdutoVenda.unidade = "";
    },
    async getProducts() {
      try {
        const { data } = await http.get("/produto");
        this.produto = data;
        return data;
      } catch (error) {
        console.log(error.response);
      }
    },

    async adicionarProduto() {
      try {
        if (this.dadosProdutoVenda.id !== "") {
          this.updateProductsSaleById();
          this.eventProdutoByTable = false;
          this.clearVenda();
          this.getProducts();

          return;
        } else {
          this.dadosProdutoVenda.id_venda = this.idVenda;
          const { data } = await http.post("/movVenda", this.dadosProdutoVenda);
          this.dadosProdutoVenda.id = data.id;
          this.eventProdutoByTable = false;
          this.clearVenda();
          this.getProducts();
        }
      } catch (error) {
        console.log(error.response);
      }
    },
    async updateProductsSaleById() {
      await http.put(
        `/movVenda/${this.dadosProdutoVenda.id}`,
        this.dadosProdutoVenda
      );
    },
  },
  created() {
    this.getProducts();
  },
  watch: {
    teste() {
      this.dadosProdutoVenda.id_produto =
        this.tableProductsData[0][0].id_produto;
      this.dadosProdutoVenda.id = this.tableProductsData[0][0].id;
      this.dadosProdutoVenda.id_venda = this.tableProductsData[0][0].id_venda;
      this.dadosProdutoVenda.quantidade =
        this.tableProductsData[0][0].quantidade;
      this.dadosProdutoVenda.valor = this.tableProductsData[0][0].valor;
      this.dadosProdutoVenda.unidade = this.tableProductsData[0][0].unidade;
      this.teste = false;
    },
  },
};
</script>

<style >
#cardContainer {
  width: 100%;
  height: 88.6vh;
  margin-top: 50px;
}

#tabContainer {
  width: 80%;
  margin: 0 auto;
}

#navBarStyle {
  border: none !important;
}
</style>