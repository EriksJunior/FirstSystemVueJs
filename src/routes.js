import Vue from 'vue'
import Router from 'vue-router'
import Cliente from './components/cliente/index-cliente'

Vue.use(Router)

const routes = [{
    path: '/cliente',
    component: Cliente
}]

const router = new Router({
    mode: 'history',
    routes
})

export default router;