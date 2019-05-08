<template>
  <div class="title">
<i-panel>
    <view style="padding: 15px;">旅游</view>
</i-panel>
 <i-card v-for="(item, index) in expressList" :key="index" title="跑腿" extra="跑腿服务" thumb="/static/images/跑腿.png">
    <view slot="content"><text>发布者：{{ item.studentNumber }} \n 详情：{{ item.detail }} \n 赏金：{{ item.price }} </text> 
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
