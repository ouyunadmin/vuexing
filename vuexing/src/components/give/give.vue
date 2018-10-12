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
    },
    // 父传子
    // pdemo: function () {
    //   console.log(888)
    // }
  },
  created() {
    this.$store.commit("addDemo", [5, 5]);
    // this.$store.commit("addShow",this.cart)
  }
};
</script>
<style>
</style>
