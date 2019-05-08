import Vue from 'vue'
import App from './index'
// add this to handle exception

Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()
const db = wx.cloud.database()
db.collection('demand').doc('xuqiubao-63e52d').get({
  success: function (res) {
    // res.data 包含该记录的数据
    console.log(res.data)
  }
})
