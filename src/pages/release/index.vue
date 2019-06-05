<template>
  <div>
 <view>
<i-panel title="发布需求(通过滑动选择需求种类: )"></i-panel>
  <picker-view indicator-style="height: 50px;" style="width:100%; height: 100px;margin:0 auto;" :value="value" >
    <picker-view-column>
      <view v-for="(item, index) in demandList" :key="index" class="demand">{{item.keywords}}</view>
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
    name: 'index',
    data () {
      return {
        demandList: []
      }
    },
    method: {
      release () {
        const db = wx.cloud.database({ env: 'xuqiubao-63e52d' })
        db.collection('demand').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            description: '添加一个需求',
            demand: [
            ]
          }
        })
          .then(res => {
            console.log(res)
          })
          .catch(console.error)
      }

    },
    created () {
      const db = wx.cloud.database({ env: 'xuqiubao-63e52d' })
      db.collection('demand').get().then(
        res => {
          console.log(res.data)
          this.demandList = res.data
        }
      )
      // let app = getApp()
    }
  }
</script>

<style>
.demand{
  text-align: center 
}
</style>
