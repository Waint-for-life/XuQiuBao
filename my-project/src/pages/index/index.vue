<template>
<div><i-grid>
    <i-grid-item  @click="toExpressPage"> 
        <i-grid-icon>
            <image src="/static/images/快递.png" />
        </i-grid-icon>
        <i-grid-label>快递</i-grid-label>
    </i-grid-item>
      <i-grid-item @click="toTwoHandsBookPage">
        <i-grid-icon>
            <image src="/static/images/book.png" />
        </i-grid-icon>
        <i-grid-label>二手书</i-grid-label>
    </i-grid-item>
      <i-grid-item>
        <i-grid-icon>
            <image src="/static/images/外卖.png" />
        </i-grid-icon>
        <i-grid-label>拿外卖</i-grid-label>
    </i-grid-item>
    </i-grid>
    <i-grid>
      <i-grid-item>
        <i-grid-icon>
            <image src="/static/images/结伴.png" />
        </i-grid-icon>
        <i-grid-label>结伴出游</i-grid-label>
    </i-grid-item>
      <i-grid-item>
        <i-grid-icon>
            <image src="/static/images/跑腿.png" />
        </i-grid-icon>
        <i-grid-label>跑腿</i-grid-label>
    </i-grid-item>
      <i-grid-item>
        <i-grid-icon>
            <image src="/static/images/运动.png" />
        </i-grid-icon>
        <i-grid-label>运动</i-grid-label>
    </i-grid-item>
    </i-grid>
    </div>
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
