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
  background-color: #F7F7F7;
  min-height: 100vh;
}
.container {
  margin: 0 0.15rem;
}
</style>
