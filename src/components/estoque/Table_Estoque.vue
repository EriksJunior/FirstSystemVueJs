<template>
  <div class="table-responsive">
    <b-card-text responsive>
      <div id="containerTabelaPesquisa">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Nome Produto</th>
              <th scope="col">Quantidade</th>
              <th scope="col">N° NFe</th>
              <th scope="col">Tipo Movimentação</th>
              <th scope="col">Nome Fornecedor</th>
              <th scope="col">Editar</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nome Produto</td>
              <td>Quantidade</td>
              <td>N° NFe</td>
              <td>Tipo Movimentação</td>
              <td>Nome Fornecedor</td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="check-square-fill"
                  scale="2"
                  variant="success"
                ></b-icon>
              </td>
              <td>
                <b-icon
                  class="icones ml-3"
                  icon="x-square-fill"
                  scale="2"
                  variant="danger"
                ></b-icon>
              </td>
            </tr>
          </tbody>
        </table>
        <b-button
          variant="info"
          class="col-md-1 col-sm-2 col-lg-1 col-xl-1 mt-3"
          size="sm"
          >Pesquisar</b-button
        >
      </div>
    </b-card-text>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>