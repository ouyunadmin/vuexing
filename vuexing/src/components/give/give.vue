<template>
  <div>
    give往vuex中传值
    <button @click="onClick">++++++</button>
    <accept></accept>
  </div>
</template>
<script>
import accept from "./accept.vue";
export default {
  data() {
    return {
      // render:
      cart:true
    }
  },
  components: {
    accept
  },
  methods: {
    onClick() {
      this.$store.commit("addDemo", [Math.random(), 7]);
    }
  },
  created() {
    this.$store.commit("addDemo", [5, 5]);
    // this.$store.commit("addShow",this.cart)
  }
};
</script>
<style>
</style>
