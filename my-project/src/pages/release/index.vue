<template>
  <div>
    <view i-class="release">
<i-panel title="发布需求(滑动选择需求种类:)" i-class="release">
    <i-input i-class="release" type="textarea" placeholder="请输入你的需求内容(最多150字)" maxlength="150" />
</i-panel>
   <view>
  <picker-view indicator-style="height: 50px;"  style="width: 100%; height: 300px;" :value="value" @change="bindChange">
    <picker-view-column>
      <view >{{item}}年</view>
    </picker-view-column>
    <picker-view-column>
      <view  >{{item}}月</view>
    </picker-view-column>
    <picker-view-column>
      <view >{{item}}日</view>
    </picker-view-column>
  </picker-view>
</view>
  <i-button type="primary" >发布</i-button>
    </view>
  </div>
</template>
<script>
  export default {
    name: 'index.vue',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>
 .release {  
  width: 500 px;  
  height: 500 px;   
} 
</style>
