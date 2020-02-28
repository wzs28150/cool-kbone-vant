<template>
  <van-tabbar v-model="active" route>
    <template v-for="(item, index) in navList" >
      <van-tabbar-item :icon="item.icon" :key="index" :to="item.url">
        {{item.title}}
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<script>
import { getNavbar } from '../../api/common'

export default {
  name: 'Footer',
  data() {
    return {
      active: 0,
      navList: []
    }
  },
  created() {
    const that = this
    getNavbar
      .then((res) => {
        // console.log(res.data.data)
        that.navList = res.data.data
      })
      .catch(() => {})
  }
}
</script>

<style lang="scss">
  .van-tabbar {
    height: 0.6rem;
    .van-tabbar-item {
      font-size: 0.14rem;
      .van-tabbar-item__icon {
        font-size: 0.2rem;
      }
    }
  }
</style>
