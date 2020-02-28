<template>
  <div class="index">
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
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Footer from '../../components/common/Footer.vue'
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
    changeIndicatorDots() {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },

    changeAutoplay() {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },

    intervalChange(e) {
      this.setData({
        interval: e.detail.value
      })
    },

    durationChange(e) {
      this.setData({
        duration: e.detail.value
      })
    }
  }
})
</script>

<style lang="scss">
.index {
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
}

.miniprogram-root {
  .for-web {
    display: none;
  }
}
</style>
