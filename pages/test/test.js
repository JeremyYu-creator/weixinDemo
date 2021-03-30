const { getScalesRecord, userInfo, deviceDetails, codes, codesMsg, productTest } = require("../../utils/api/test")
const { toDate }  = require('../../utils/common')
// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: [],
    total: 0 ,
    page: 1,
    pagesize: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScales()
    // this.getUserInfo()
    // this.getDeviceDetails()
    // this.getCodes()
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
    const {page , total , pagesize} = this.data
    if(page * pagesize > total){
      wx.showToast({
        title: '已显示全部数据',
      })
      return 
    }
    const pages = page + 1
    console.log(pages)
    this.setData({
      page: pages
    })
    this.loadMore(pages , pagesize)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 获取体脂秤称重记录
  getScales: function () {
    getScalesRecord(this.data.page , this.data.pagesize).then(res=>{
      console.log(res)
      res.records = res.records.map(ele => {
        ele.create_time = toDate(ele.create_time)
        return ele
      })
      this.setData({
        records: res.records,
        total: res.total
      })
    }).catch(error=>{
      wx.showToast({
        title: error,
        icon: "error",
      })
    })
  },
  getUserInfo: function() {
    userInfo().then(res=>{
      console.log(res)
    }).catch(error=>{
      wx.showToast({
        title: error,
        icon: "error",
      })
    })
  },
  // 获取设备详情
  getDeviceDetails: function() {
    deviceDetails().then(res=>{
      console.log(res)
    }).catch(error=>{
      wx.showToast({
        title: error,
        icon: "error",
      })
    })
  },
  getCodes:function() {
    codes().then(res=>{
      console.log(res)
    }).catch(error=>{
      wx.showToast({
        title: error,
        icon: "error",
      })
    })
  },
  // 上拉加载更多
  loadMore:function(pages , pagesizes) {
    console.log(pages)
    const {records} = this.data
    getScalesRecord(pages , pagesizes).then(res=>{
      res.records = res.records.map(ele=>{
        ele.create_time = toDate(ele.create_time)
        return ele
      })
      records.push(...res.records)
      this.setData({
        records:records
      })
    }).catch(error=>{
      wx.showToast({
        title: error,
        icon: "error",
      })
    })
  }
})