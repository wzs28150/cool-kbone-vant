<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/test/list/123" >分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/me">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onClickJump(url) {
      window.location.href = url
    },

    onClickOpen() {
      window.open('/test/detail/123')
    }
  }
}
</script>

<style lang="scss">
.van-tabbar {
  height: 0.6rem;
  .van-tabbar-item{
    font-size: 0.14rem;
    .van-tabbar-item__icon {
      font-size: 0.2rem;
    }
  }
}
</style>
