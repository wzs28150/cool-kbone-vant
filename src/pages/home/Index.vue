<template>
  <div class="index">
    <wx-swiper v-if="type == 1" :indicator-dots="indicatorDots"
        :autoplay="autoplay" :interval="interval" :duration="duration">
      <wx-swiper-item class="swiper-item" v-for="(item, index) in background" v-bind:key="index">
        {{index}}
      </wx-swiper-item>
    </wx-swiper>
    <van-swipe  check-reduce class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="swiper-item">1</van-swipe-item>
      <van-swipe-item class="swiper-item">2</van-swipe-item>
      <van-swipe-item class="swiper-item">3</van-swipe-item>
      <van-swipe-item class="swiper-item">4</van-swipe-item>
    </van-swipe>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Footer from '../../common/Footer.vue'
import Web from 'reduce-loader!../../common/Web.vue'
import 'reduce-loader!./web'
import { getNewsCategory } from '../../api/home'

export default Vue.extend({
  name: 'Home',
  components: {
    Footer,
    Web
  },
  data() {
    return {
      type: 0,
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500
    }
  },
  created() {
    getNewsCategory
      .then((res) => {
        console.log(res.data.data)
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
.cnt {
  margin-top: 20px;
}
.swiper-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
a,
button {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
}

.miniprogram-root {
  .for-web {
    display: none;
  }
}
</style>
