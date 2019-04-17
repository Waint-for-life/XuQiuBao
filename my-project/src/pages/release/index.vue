<template>
  <div>
 <view>
<i-panel title="发布需求(通过滑动选择需求种类: )"></i-panel>
  <picker-view indicator-style="height: 50px;" style="width:100%; height: 100px;margin:0 auto;" :value="value" @change="bindChange">
    <picker-view-column>
      <view v-for="item in demandList" :key="item" class="demandList">{{item.keywords}}类</view>
    </picker-view-column>
  </picker-view>
 <i-input :value="detail" mode="wrapped" title="详情" type="textarea" placeholder="请输入你的需求内容(最多150字)" maxlength="150" />
 <i-input :value="price" mode="wrapped" type="number" title="赏金" placeholder="请输入你的赏金: " />
  <i-button type="primary" @click="release" >发布</i-button>
    </view>
  </div>
</template>
<script>
  export default {
    name: 'index.vue',
    data () {
      return {
        demandList: [],
        detail: '',
        price: ''
      }
    },
    mounted: function () {
      this.$fly.get('https://www.wjxweb.cn:789/Demand/all/1')
        .then((res) => {
          console.log(res)
          this.demandList = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    methods: {
      release () {
        this.$fly.post('https://www.wjxweb.cn:789/Demand/', {
          keywords: 0, detail: 0, price: 0
        })
          .then(function (res) {
            console.log(res)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<style>
.demandList{
  text-align: center 
}
</style>
