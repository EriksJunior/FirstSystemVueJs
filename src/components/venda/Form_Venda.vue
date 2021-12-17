<template>
  <div id="cardContainer">
    <div id="tabContainer">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Venda" active>
            <b-card-text>
              <b-form-row>
                <div class="form-group col-sm-4">
                  <b-form-group label="Produto">
                    <b-form-select hidden> </b-form-select>
                    <b-form-select
                      class="col-xl-11"
                      size="sm"
                      value-field="id"
                      text-field="nome"
                      :options="produto"
                    >
                    </b-form-select>
                  </b-form-group>
                </div>
              </b-form-row>
            </b-card-text>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card-text>Tab contents 2</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produto: [
        {
          nome: "teste",
        },
      ],
    };
  },
};
</script>

<style scopet>
#cardContainer {
  width: 100%;
  height: 88.6vh;
  margin-top: 50px;
}

#tabContainer {
  width: 80%;
  margin: 0 auto;
}
</style>