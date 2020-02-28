<template>
  <div class="index">
    <!-- 搜索 -->
    <form class="search" action="/">
      <van-search
        v-model="search.key"
        :show-action="search.showAction"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 搜索 -->
    <div class="banner">
      <!-- 小程序banner -->
      <wx-swiper v-if="type == 1" class="swipe" :indicator-dots="banner.indicatorDots"
        :autoplay="banner.autoplay" :interval="banner.interval" :duration="banner.duration">
        <wx-swiper-item class="swiper-item" v-for="(item, index) in banner.list" v-bind:key="index">
          <wx-image :src="item.img" lazy-load="true" class="pic" mode="aspectFill"></wx-image>
        </wx-swiper-item>
      </wx-swiper>
      <!-- 小程序banner -->
      <!-- web banner -->
      <van-swipe check-reduce class="swipe" :autoplay="banner.interval"
      :duration="banner.duration">
        <van-swipe-item class="swiper-item" v-for="(item, index) in banner.list" v-bind:key="index"
        :style="{backgroundImage: 'url(' + item.img + ')'}">
        </van-swipe-item>
      </van-swipe>
      <!-- web banner -->
    </div>
    <div class="fast-nav">
      <div class="container">
        <van-row type="flex" justify="space-between">
          <van-col span="4">产品分类</van-col>
          <van-col span="4">领券优惠</van-col>
          <van-col span="4">行业资讯</van-col>
          <van-col span="4">我要签到</van-col>
        </van-row>
        <van-row type="flex" justify="space-between">
          <van-col span="4">产品分类</van-col>
          <van-col span="4">领券优惠</van-col>
          <van-col span="4">行业资讯</van-col>
          <van-col span="4">我要签到</van-col>
        </van-row>
      </div>
    </div>
    <div class="main" style="height: 1000px"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Footer from '../../components/common/Footer.vue'
import { Toast } from 'vant'
import Web from 'reduce-loader!../../components/common/Web.vue'
import 'reduce-loader!./web'
import { getIndex } from '../../api/home'

export default Vue.extend({
  name: 'Home',
  components: {
    Footer,
    Web
  },
  data() {
    return {
      type: 0,
      search: {
        showAction: false,
        key: ''
      },
      banner: {}
    }
  },
  created() {
    const that = this
    getIndex
      .then((res) => {
        that.banner = res.data.data.banner
      })
      .catch(() => {})
    window.addEventListener('wxload', query =>
      console.log('page1 wxload', query)
    )
    window.addEventListener('wxshow', () => console.log('page1 wxshow'))
    window.addEventListener('wxready', () => console.log('page1 wxready'))
    window.addEventListener('wxhide', () => console.log('page1 wxhide'))
    window.addEventListener('wxunload', () => console.log('page1 wxunload'))

    if (process.env.isMiniprogram) {
      this.type = 1
      console.log('I am in miniprogram')
    } else {
      console.log('I am in Web')
    }
  },
  methods: {
    onSearch(val) {
      Toast(val)
    },
    onCancel() {
      Toast('取消')
    }
  }
})
</script>

<style lang="scss">

.index {
  padding-top: 0.54rem;
  .search {
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    .van-search {
      padding: 0.1rem 0.12rem;
      .van-search__content {
        padding-left: 0.08rem;
        border-radius: 0.02rem;
        .van-cell {
          padding: 0.05rem 0.08rem 0.05rem 0;
          .van-field__left-icon {
            line-height : 0.24rem;
            font-size: 0.16rem;
            .van-icon{
              font-size: 0.16rem;
            }
          }
          .van-field__control {
            height: 0.24rem;
            min-height: 0.24rem;
            line-height : 0.24rem;
            font-size: 0.14rem;
          }
        }
      }
    }
  }
  .banner {
    height: 2rem;
    .swipe{
      height: 100%;
      .swiper-item {
        color: #fff;
        font-size: 20px;
        height: 100%;
        text-align: center;
        background-color: #F7F7F7;
        background-size: cover;
        background-position: center;
        .pic{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .fast-nav {
    background-color: #fff;
  }
}

.miniprogram-root {
  .for-web {
    display: none;
  }
}
</style>
