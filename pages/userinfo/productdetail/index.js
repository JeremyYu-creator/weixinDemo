// pages/userinfo/productdetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: null,
    detail: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const params2 = {//设备连接信息
      name: "ty-service",
      data: {
        action: 'device.getDeviceList',
        params: {
          // "device_id": "vdevo161603700210465"
          uid: "ay1615874890668SaRFW"
        }
      }
    };
    wx.cloud.callFunction(params2).then(res =>{
      this.setData({
        list: res.result.data.functions,
        detail: res.result.data
      })
      console.log('res', res);
		}).catch(err => console.log('err', err))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})