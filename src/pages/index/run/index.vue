<template>
  <div class="title">
<i-panel>
    <view style="padding: 15px;">跑腿</view>
</i-panel>
 <i-card v-for="(item, index) in expressList" :key="index" title="跑腿" extra="跑腿" thumb="/static/images/跑腿.png">
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
    }
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
