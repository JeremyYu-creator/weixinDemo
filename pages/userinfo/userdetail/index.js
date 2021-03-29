// pages/userinfo/userdetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const params10 = {//查询该用户的信息，包括微信相关信息内容
			// name 云函数的名称，必须使用 ty-service
			name: "ty-service",
			data: {
				action: "user.infos",
			// params 接口参数
				params: {
					"uid": "ay1615874890668SaRFW"
				}
			}
		};
		
		wx.cloud.callFunction(params10).then(res =>{
			console.log('res', res);
			this.setData({
				list: res.result.data
			})
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