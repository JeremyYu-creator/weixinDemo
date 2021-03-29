// pages/user/index.js
import wxMqtt from '../../utils/mqtt/wxMqtt';
import { getMqttconfig } from '../../utils/api/device-api';
import request from '../../utils/request';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // cloudInner: {
    //   isDroped: false,
    //   url: '/pages/cloud_check/index'
    // },
    datas: null,
    cityname: null,
    list: [
      {
        name: '用户信息',
        url: '/pages/userinfo/userdetail/index'
      },
      {
        name: '设备信息',
        url: '/pages/userinfo/productdetail/index'
      },
      {
        name: '天气信息',
        url: 'navigateToMiniProgram'
      },
      {
        name: '体重秤数据',
        url: '/pages/test/test'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:  function (options) {
    const params = {
      name: "ty-service",
      data: {
        action: 'weather.forecastPosition',
        params: {
          //"city_id": "793409505965772800"
          "lat": "39.904138",
          "lon": "116.407112"
        }
      }
    };
    wx.cloud.callFunction(params).then(res =>{
      this.setData({
        datas: res.result.data.data,
      })
      // console.log('res', Object.keys(JSON.parse(JSON.stringify(res.result.data)))[3].);
      // console.log('res', Object.keys((res.result.data)));
      console.log('res', res);
    }).catch(err => console.log('err', err))
    
    const params1 = {
      name: "ty-service",
      data: {
        action: 'weather.city',
        params: {
          "city_id": "793409505965772800"
        }
      }
    };
    wx.cloud.callFunction(params1).then(res =>{
      this.setData({
        cityname: res.result.data,
      })
      console.log('res', res);
		}).catch(err => console.log('err', err))
    },
  onClickHide: function () {
      this.setData({ show: false });
    },
  gotoOtherage: function (event) {
    const {
      dataset: { url }
    } = event.currentTarget;
    if (url == 'navigateToMiniProgram') {
      this.setData({ show: true });
    } else {
      wx.navigateTo({
        url
      });
    }
  }
});