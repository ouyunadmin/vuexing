import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)
export default new Vuex.Store({
  state:{
    demoData:[],  
    cart:100,
    accept:true,
    localSt: (function(){
      return localStorage.getItem('demokey')
    })()
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
    },
    //当是accept时传值true
    addept(state,isBo){
      state.accept = isBo
      // console.log(isBo);
    }
  },
  getters: {
    getDemo(state){
      return state.demoData
    },
    getAcc(state){
      // console.log(state.cart);
      return state.cart
    },
    //当是accept时 ,输入框不显示
    getAccept(state){
      return state.accept
    }
  },
  actions: {
    addCurrent({ commit }, cart) { 
      commit('addDemo', cart)
    },
  }
})