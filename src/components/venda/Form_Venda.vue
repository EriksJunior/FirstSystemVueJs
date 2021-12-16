<template>
  <div id="cardContainer">
    <div id="tabContainer">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Venda" active>
            <b-card-text>Tab contents 1</b-card-text>
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
export default {};
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