import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)
export default new Vuex.Store({
  state:{
    demoData:[],  
  },
  mutations:{
    addDemo(state,cart){
      state.demoData = cart
      console.log(state.demoData);
    }
  },
  getters: {
    getDemo(state){
      return state.demoData
    }
  },
  actions: {
    
  }
})