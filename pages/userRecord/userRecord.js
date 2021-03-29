// pages/userRecord/userRecord.js
const { userInfo } = require('../../utils/api/test')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData : null,
    user_id:"",
    weight:"",
    report: null,
    bodyType: {
      0: "过轻",
      1: "正常",
      2: "过重",
      3: "肥胖",
      4: "非常肥胖"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user_id:options.user_id,
      weight: options.weight
    })
    console.log(this.data.user_id)
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

  },
  formSubmit(e){
    this.setData({
      formData: e.detail.value,
      ['formData.weight']: this.data.weight,
      ['formData.device_id']: "6061313568c63ae228ba",
      ['formData.resistance']: "718"
    })
    userInfo(this.data.formData).then(res=>{
      console.log(res)
      this.setData({
        report: res
      })
    }).catch(error=>{
      console.log('err',error)
    })
  }
  
})