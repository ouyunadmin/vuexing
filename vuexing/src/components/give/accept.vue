<template>
  <div>
    接收vuex中的值
    {{demoData}}
    <!-- {{getDemo}} -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  // computed: mapGetters(['getDemo'])
  computed: mapState(['demoData'])
}
</script>
<style>

</style>
