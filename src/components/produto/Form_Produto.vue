<template>
  <div id="formProduto">
    <div id="inputsProduto">
      <h1
        style="
          text-align: center;
          margin-bottom: 10px;
          color: white;
        "
      >
        Cadastro de Produtos
      </h1>
      <b-card bg-variant="light">
        <form class="row">
          <b-form-input class="col-sm-1" hidden></b-form-input>
          <div class="form-group col-md-12 col-sm-6 col-lg-7 col-xl-6">
            <b-form-group label="Nome:">
              <b-form-input
                class="col-sm-12"
                placeholder="Nome produto"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-6 col-md-12 col-lg-7 col-xl-3">
            <b-form-group label="Marca:">
              <b-form-input placeholder="Marca"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-8 col-lg-5 col-xl-3">
            <b-form-group label="Quantidade:">
              <b-form-input
                class="col-sm-12"
                placeholder="Quantidade"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-2 col-md-4 col-lg-3 col-xl-4">
            <b-form-group label="Preço de custo">
              <b-form-input
                class="col-sm-12"
                placeholder="Preço do custo"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-8 col-lg-6 col-xl-4">
            <b-form-group label="Preço de venda:">
              <b-form-input
                class="col-sm-12"
                placeholder="Preço de venda"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-2 col-md-4 col-lg-2 col-xl-4">
            <b-form-group label="Categoria:">
              <b-form-input
                class="col-sm-9 col-lg-12"
                placeholder="Categoria"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-4 col-md-12 col-lg-5 col-xl-4">
            <b-form-group label="Data de cadastro:">
              <b-form-input type="date"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-md-12 col-sm-12 col-lg-12 col-xl-8">
            <b-form-group label="Observação:">
              <b-form-textarea
                id="textarea"
                placeholder="Preencha algo..."
                rows="5"
              ></b-form-textarea>
            </b-form-group>
          </div>
        </form>

        <div id="btnCad">
          <b-row class="justify-content-md-center">
            <b-col col md="12" lg="4" xl="3">
              <b-button variant="success" class="col-md-12 mt-2" size="lg"
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
              <b-button variant="info" class="col-md-12 mt-2 teste"  size="lg"
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
export default {};
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