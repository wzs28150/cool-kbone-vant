<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
})
</script>
<style lang="scss">
#app, page {
  font-size: 0.16rem!important;
}
</style>
