<template>
  <div>
    <view class="userinfo">
    <view class="userinfo-avatar">
    <open-data type="userAvatarUrl"></open-data>
    </view>
    <view class="userinfo-name">
       <open-data type="userNickName"></open-data>
    </view>
    </view>
    <i-button open-type="getUserInfo" @click="bindGetUserInfo">授权登录</i-button>
  </div>
</template>

<script>
    export default {
      data () {
      },
  methods: {
        bindGetUserInfo () {
        }
      }
    }
</script>

<style scoped>
.userinfo {  
  position: relative;  
  width: 750rpx;  
  height: 320rpx;  
  color: #fff;  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
}  
  
.userinfo-avatar {  
  overflow:hidden;  
  display: block;  
  width: 160rpx;  
  height: 160rpx;  
  margin: 20rpx;  
  margin-top: 50rpx;  
  border-radius: 50%;  
  border: 2px solid #fff;   
} 
.userinfo-name {    
  color: #000;  
}   
</style>
