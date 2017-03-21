import Vue from 'vue'
import Vonic from 'vonic/src/index.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'

import PwdLogin from './components/login/PwdLogin.vue'
import SmsLogin from './components/login/SmsLogin.vue'

import CIndex from './components/consumer/CIndex.vue'
import Products from './components/consumer/Products.vue'
import ProductDetail from './components/consumer/ProductDetail.vue'
import Messages from './components/consumer/Messages.vue'
import Orders from './components/consumer/Orders.vue'
import Wishes from './components/consumer/Wishes.vue'

// Routes
const routes = [
    { path: '/', component: Index },
    { path: '/pwdLogin', component: PwdLogin },
    { path: '/smsLogin', component: SmsLogin },
    {
        path: '/c',
        component: CIndex,
        children: [
            { path: 'products', component: Products },
            { path: 'wishes', component: Wishes },
            { path: 'orders', component: Orders },
            { path: 'messages', component: Messages }
        ]
    },
    // { path: '/c/products', component: Products },
    { path: '/about', component: About },
    { path: '/c/product/:pid', component: ProductDetail }
]

Vue.use(Vonic.app, {
  routes: routes
})
