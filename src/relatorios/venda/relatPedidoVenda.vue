<template >
  <div id="container">
    <div id="relatorioPedido">
      <div class="header p-2 d-flex">
        <div class="tituloHeader">
          <h2 class="mt-2 ml-1"><u> Dados Cliente</u></h2>
          <h6 class="mt-2 ml-1">ass:__________________________________</h6>
        </div>
        <div class="informacoesCliente">
          <h5 class="mt-2">
            <strong>Nome Cliente: </strong>Eriks Junior Pinheiro
          </h5>
          <h5 class="mt-2"><strong>Endereço: </strong>Centro</h5>
          <h5 class="mt-2"><strong>Nº: </strong>82</h5>
          <h5 class="mt-2"><strong>Cidade: </strong>Viçosa</h5>
          <h5 class="mt-2"><strong>UF: </strong>MG</h5>
        </div>
        <div class="logoTipo mt-2 ml-5"></div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.logoTipo {
  width: 28%;
  border: solid 1px black;
}
.informacoesCliente {
  width: 42%;
  text-align: center;
}
#container {
  width: 100%;
  height: 100vh;
}

#relatorioPedido {
  width: 100%;
  height: 150px;
}

.header {
  border: solid 2px black;
}

.tituloHeader {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  border: solid 2px black;
}

* {
  background-color: white !important;
}
</style>