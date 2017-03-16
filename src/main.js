import Vue from 'vue'
import Vonic from 'vonic/src/index.js'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'
import CIndex from './components/consumer/CIndex.vue'
import Products from './components/consumer/Products.vue'
import Messages from './components/consumer/Messages.vue'
import Orders from './components/consumer/Orders.vue'
import Wishes from './components/consumer/Wishes.vue'

// Routes
const routes = [
    { path: '/', component: Index },
    {
        path: '/cindex',
        component: CIndex,
        children: [
            { path: 'products', component: Products },
            { path: 'wishes', component: Wishes },
            { path: 'orders', component: Orders },
            { path: 'messages', component: Messages }
        ]
    },
    // { path: '/c/products', component: Products },
    { path: '/about', component: About }
]

Vue.use(Vonic.app, {
  routes: routes
})
