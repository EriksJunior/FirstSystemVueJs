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
                          v-model="selecione"
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

                    <div class="form-group col-md-7 col-sm-4 col-lg-5 col-xl-4">
                      <b-form-group label="Tipo movimentação">
                        <b-form-select class="mb-3 col-xl-11" size="sm">
                          >Selecione uma movimentação...
                        </b-form-select>
                      </b-form-group>
                    </div>
                  </form>
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
      produto: [],
      tipoMov: [],
      selecione: "Seleciona aqui...",
    };
  },
  methods: {
    async dadosProduto() {
      const { data } = await http.get("/produto");
      this.produto = data;
      console.log(this.produto);
      return data;
    },
  },
  mounted() {
    this.dadosProduto();
  },
};
</script>

<style>
#formEstoque {
  margin: 0 auto;
  width: 90%;
}

#cardEstoque {
}

#inputsEstoque {
}
</style>