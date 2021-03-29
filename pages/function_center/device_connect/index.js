// miniprogram/pages/function_center/device_connet/index.js
import { reqTicket, getClientId } from '../../../utils/api/common-api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    apUrl: '/pages/web_view/index?urlType=apUrl',
    clientId: "gueqmddhwsewn8hh5vpd",
    ticket:"",
    list: [
      {
        name: 'Wi-Fi AP 配网',
        baseUrl: 'plugin://tuya-ap-plugin/step1'
      },
      {
        name: '蓝牙配网',
        baseUrl: 'plugin://tuya-ap-plugin/ble'
      },
      {
        name: '扫码配网',
        baseUrl: 'plugin://tuya-ap-plugin/virtual'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTicket()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getTicket:async function (){
    const uid = wx.getStorageSync("uid")
    const res = await reqTicket(uid)
    this.setData({
      ticket: res.ticket,
    })
  },
  gotoPluginpage: async function ({ currentTarget }) {
    const { dataset: { baseurl } } = currentTarget
    const uid = wx.getStorageSync("uid")
    const [{ ticket }, clientId] = await Promise.all([reqTicket(uid), getClientId()])

    // wx.navigateTo({
    //   url: `${baseurl}?ticket=${ticket}&clientId=${clientId}`,
    // })
    wx.navigateTo({
      url: 'plugin://tuya-ap-plugin/step1?ticket='+this.data.ticket+'&clientId='+this.data.clientId,
    })
  },

  gotoWebview: function({currentTarget}) {
    const { dataset: { baseurl } } = currentTarget
    wx.navigateTo({
      url: baseurl,
    })
  }

})