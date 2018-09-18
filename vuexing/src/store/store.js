import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)
export default new Vuex.Store({
  state:{
    demoData:[],  
    cart:false,
  },
  mutations:{
    addDemo(state,cart){
      // state.demoData = cart
      state.demoData.push(cart)
      // console.log(state.demoData);
    },
    addShow(state,acc){
      state.cart = acc
      // console.log(acc);
    }
  },
  getters: {
    getDemo(state){
      return state.demoData
    },
    getAcc(state){
      console.log(state.cart);
      return state.cart

    }
  },
  actions: {

  }
})