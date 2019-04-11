<template>
<view>
    <view class='userinfo'>
    <view class='userinfo-avatar'>
    <open-data type="userAvatarUrl"></open-data>
      <image  src='userAvatarUrl'> </image>
    </view>
    </view>
    <view class='content'>
    <view>申请获取以下权限 </view>
    <text >获得你的公开信息(昵称，头像等)</text>
    </view>
    <button  class='bottom' type='primary' open-type="getUserInfo"  @click="bindGetUserInfo">授权登录</button>
</view>
</template>

<script>
    export default {
      data () {
      },
  methods: {
        bindGetUserInfo () {
          wx.switchTab({
            url: '/pages/index/main'
          })
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
  align-self: center;
  margin: 90rpx ;
  margin-top: 50rpx;  
  border-radius: 50%;  
  border: 2px solid #fff;   
} 
 
.content {
    align-content: center;
    margin-left: 50rpx;
    margin-bottom: 90rpx;
}
 
.content text {

    display: block;
    color: #9d9d9d;
    margin-top: 40rpx;
}
 
.bottom {
    border-radius: 80rpx;
    margin: 70rpx 50rpx;
    font-size: 35rpx;
}

</style>
