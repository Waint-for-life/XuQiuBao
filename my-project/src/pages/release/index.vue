<template>
  <div>
    <view i-class="release">
<i-panel title="发布需求" i-class="release">
    <i-input i-class="release" type="textarea" placeholder="请输入你的需求内容(最多150字)" maxlength="150" />
</i-panel>
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
