<template>
  <div class="title">
<i-panel>
    <view style="padding: 15px;">二手书</view>
</i-panel>
 <i-card v-for="(item, index) in expressList" :key="index" title="二手书" extra="二手书" thumb="/static/images/book.png">
    <view slot="content"><text>发布者：{{ item.belongUsername }} \n 详情：{{ item.bookName }} \n 赏金：{{ item.bookPrice }} </text> 
    </view>
    <view slot="footer">具体信息请私戳，非诚勿扰</view>
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
    this.$fly.get('https://www.wjxweb.cn:789/TwoHandsBook/all/1')
      .then((res) => {
        console.log(res)
        this.expressList = res.data.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    accept () {
      console.log(2)
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
