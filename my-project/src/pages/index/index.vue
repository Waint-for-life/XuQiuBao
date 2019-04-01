<template>
  <view class="whole">
    <view class="weui-grids"  >
      <a class="weui-grid"  @click="toExpressPage">
        <view class="weui-grid__icon">
          <img src="/static/images/快递1.png" alt="/static/images/快递2.png">
        </view>
        <p class="weui-grid__label">
          代拿快递
        </p>
      </a>
      <a class="weui-grid" @click="toTwoHandsBookPage">
        <view class="weui-grid__icon">
          <img src="" alt="">
        </view>
        <p class="weui-grid__label">
          二手书
        </p>
      </a>
      <a href="javascript:;" class="weui-grid" >
        <view class="weui-grid__icon">
          <img src="" alt="">
        </view>
        <p class="weui-grid__label">
          求助
        </p>
      </a>
      <a href="javascript:" class="weui-grid" >
        <view class="weui-grid__icon">
          <img src="" alt="">
        </view>
        <p class="weui-grid__label">
          其他
        </p>
      </a>
      <a href="javascript:" class="weui-grid" >
        <view class="weui-grid__icon">
          <img src="" alt="">
        </view>
        <p class="weui-grid__label">
          其他
        </p>
      </a>
      <a href="javascript:" class="weui-grid" >
        <view class="weui-grid__icon">
          <img src="" alt="">
        </view>
        <p class="weui-grid__label">
          其他
        </p>
      </a>
  </view>
  </view>
</template>

<script>
import card from '@/components/card'

export default {
  data () {

  },

  components: {
    card
  },

  methods: {
    toExpressPage () {
      wx.navigateTo({
        url: 'express/main'
      })
    },
    toTwoHandsBookPage () {
      wx.navigateTo({
        url: 'twoHandsBook/main'
      })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

</style>
