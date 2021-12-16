import Vue from 'vue'
import Router from 'vue-router'
import Cliente from './components/cliente/index-cliente'
import Produto from './components/produto/index-produto'
import Home from './components/home/index_home'
import Estoque from './components/estoque/index_estoque'
import Venda from './components/venda/index_venda'
Vue.use(Router)

const routes = [
    {
        path: '/cliente',
        component: Cliente
    },
    {
        path: '/produto',
        component: Produto
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/estoque',
        component: Estoque
    },
    {
        path: '/venda',
        component: Venda
    },
]


const router = new Router({
    mode: 'history',
    routes
})

export default router;