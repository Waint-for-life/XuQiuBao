<template>
 <div>
<view>
  <view>{{year}}年{{month}}月{{day}}日</view>
  <picker-view
    indicator-style="height: 50px;"
    style="width: 100%; height: 300px;"
    :value="value"
    @change="bindChange"
  >
    <picker-view-column>
      <view style="line-height: 50px">{{item}}年</view>
    </picker-view-column>
    <picker-view-column>
      <view  style="line-height: 50px">{{item}}月</view>
    </picker-view-column>
    <picker-view-column>
      <view style="line-height: 50px">{{item}}日</view>
    </picker-view-column>
  </picker-view>
</view>
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
    }
  }
</script>

<style>
body,html{height: 100%}
</style>
