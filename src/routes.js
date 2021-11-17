import Vue from 'vue'
import Router from 'vue-router'
import Cliente from './components/cliente/index-cliente'
import Produto from './components/produto/index-produto'

Vue.use(Router)

const routes = [
    {
        path: '/cliente',
        component: Cliente
    },
    {
        path: '/produto',
        component: Produto
    }
]


const router = new Router({
    mode: 'history',
    routes
})

export default router;