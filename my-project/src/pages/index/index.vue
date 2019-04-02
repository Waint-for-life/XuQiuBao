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
<i-panel>
    <view style="padding: 15px;">需求广场</view>
</i-panel>
<i-card v-for="(item, index) in expressList" :key="index" title="需求"  thumb="/static/images/需求.png">
    <view slot="content"><text>发布者：{{ item.studentNumber }} \n 详情：{{ item.detail }} \n 赏金：{{ item.price }} </text> 
    </view>
    <view slot="footer">具体信息请私戳，非诚勿扰</view>
 </i-card>
 <i-card title="快递" extra="帮取快递" thumb="/static/images/快递.png">
    <view slot="content">有同学能帮我去二期楚才菜鸟驿站取个快递吗？在线等</view>
    <view slot="footer">具体信息请私戳，非诚勿扰</view>
</i-card>
<i-card title="二手书" extra="二手书便宜出" thumb="/static/images/book.png">
    <view slot="content">应届毕业生，毕业在即，便宜出二手书给学弟学妹。</view>
    <view slot="footer">买不了吃亏，买不了上当。</view>
</i-card>
<i-card title="拿外卖" extra="三期门口" thumb="/static/images/外卖.png">
    <view slot="content">帮取下外卖，三期门口</view>
    <view slot="footer">懒癌发作，帮取下外卖。</view>
</i-card>
    </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      expressList: []
    }
  },
  mounted: function () {
    this.$fly.get('https://www.wjxweb.cn:789/Demand/all/1')
      .then((res) => {
        console.log(res)
        this.expressList = res.data.data
      })
      .catch((err) => {
        console.log(err)
      })
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
