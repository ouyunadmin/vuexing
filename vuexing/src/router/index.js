import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import give from '@/components/give/give.vue'
import cart from '@/components/cart/cart.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/give',
      name: 'give',
      component: give
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart

    }
  ]
})
