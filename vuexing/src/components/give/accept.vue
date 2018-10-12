<template>
  <div>
    接收vuex中的值:
    <!-- <div v-if="getAcc">
      在打开give时，这是要显示的内容{{getAcc}}
    </div> -->
    <!-- {{demoData}} -->
    <!-- <ul v-for="item in getDemo">
      <li>{{item}}</li>
    </ul> -->
    <!-- {{localSt}} -->
    <!-- {{getDemo}} -->
    <!--{{ doneTodosCount }}-->
    {{zidemo}}
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      info: 100,
      zi:''
    }
  },
  // computed: mapGetters(['getDemo'])
  // computed: mapGetters(["getDemo","getAcc"]),
  // computed: mapState(['localSt']),
  // created(){
  //   this.$store.commit("addept",false)
  //   //传入 localstorage 
  //   localStorage.setItem('demokey','你好')
    
  // }
  computed: {
    doneTodosCount (){
      return this.$store.getters.getDemo
    },

  },
  created(){
    console.log(this.zidemo)
    this.$emit('this.info')
  },
  props:['zidemo']
};
</script>
<style>
</style>
