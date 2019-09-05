<template>
  <div>
    give往vuex中传值
    <button @click="onClick">++++++</button>
    <accept :zidemo = 'parrent' v-bind=""></accept>
  </div>
</template>
<script>
import accept from "./accept.vue";
export default {
  data() {
    return {
      // render:
      cart:true,
      // 组件传值 父传子
      parrent: 99
    }
  },
  components: {
    accept
  },
  methods: {
    onClick() {
      this.$store.commit("addDemo", [Math.random(), 7]);
      // this.$store.dispatch("addCurrent", [Math.random(), 7]);
    },
    // 父传子
    // pdemo: function () {
    //   console.log(888)
    // }
  },
  created() {
    this.$store.commit("addDemo", [5, 5]);
    // this.$store.commit("addShow",this.cart)
              //  else if ( event.keyCode === 37 ) {
              //       if (current <= 0) {
              //         current = 0
              //       } else {
              //         current--
              //       }
              //       setTimeout(() => {
              //         /*
              //         * 表单select，blur事件，自动聚焦时隐藏下拉框选项菜单
              //         */
              //         _that.$refs.PageForm.selectBlur()
              //         _that.autoFocus(current)
              //       }, 100)
              //       return false
              //   }
  }
};
</script>
<style>
</style>
