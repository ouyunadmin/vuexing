<template>
  <div>
    接收vuex中的值
    <div v-if="getAcc">
      在打开give时，这是要显示的内容{{getAcc}}
    </div>
    <!-- {{demoData}} -->
    <ul v-for="item in getDemo">
      <li>{{item}}</li>
    </ul>
    
    <!-- {{getDemo}} -->
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  // computed: mapGetters(['getDemo'])
  computed: mapGetters(["getDemo","getAcc"]),
};
</script>
<style>
</style>
