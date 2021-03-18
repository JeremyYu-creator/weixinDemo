// pages/home_center/test_list/index.js
Page({
  data: {
    url: '',
    list: null,
    datas: null
  },
  onShow() {
    const params2 = {//设备连接信息
      name: "ty-service",
      data: {
        action: 'device.specifications',
        params: {
          "device_id": "vdevo161603700210465"
        }
      }
    };
    wx.cloud.callFunction(params2).then(res =>{
      this.setData({
        list: res.result.data.functions,
        datas: res.result.data.functions
      })
      console.log('res', res);
    }).catch(err => console.log('err', err))
  },

  jumpto1() {
    wx.navigateTo({
      url: `plugin://tuya-ap-plugin/step1`,
    });
  },
  onReady() {
//     const params = {
//       name: "ty-service",
//       data: {
//         "action": "data.statisticsSurvey",
//         "params": {
          
//         }
//       }
//     };
//   wx.cloud.callFunction(params).then(res =>{
//     this.setData({
//     datas: res.result.data.dev_active.today_acive,
//     })
//     console.log("datas:", typeof(this.datas))
//     console.log('res', res); // 结果里如果返回 true 则说明下发设备成功
// }).catch(err => console.log('err', err));

//   const params3 = {
//     name: "ty-service",
//     data: {
//       "params": {
//         "device_id": "vdevo161587489288606",
//       },
//       "action":"statistics.allType"//连接成功了，但是目前的设备不支持
//     }
//   };
//   wx.cloud.callFunction(params3).then(res =>{
//     console.log('res', res); // 结果里如果返回 true 则说明下发设备成功
// }).catch(err => console.log('err', err));

// const params4 = {
//   name: "ty-service",
//   data: {
// 		"action":"device.getListByProduct",//连接成功了，但是目前的设备不支持
//     "params": {
//       "product_id": "g0er6hSKgMqrVMuf",
//     },
//   }
// };
// wx.cloud.callFunction(params4).then(res =>{
//   console.log('res', res); // 结果里如果返回 true 则说明下发设备成功
// }).catch(err => console.log('err', err));

// const params5 = {//尝试没有连接的设备进行访问
// 	// name 云函数的名称，必须使用 ty-service
// 	name: "ty-service",
// 	data: {
// 		action: "device.specifications",
// 	// params 接口参数
// 		params: {
// 		"device_id": "vdevo161588399566011" // 此处为体脂秤的id，但是拒绝访问
// 		}
// 	}
// };

// wx.cloud.callFunction(params5).then(res =>{
// 	console.log('res', res);
// }).catch(err => console.log('err', err))

const params9 = {//获取uid
	// name 云函数的名称，必须使用 ty-service
	name: "ty-service",
	data: {
		action: "user.wx-applet.synchronization",
	// params 接口参数
		params: {
      "open_id": "cloud",
      "app_schema": "cloud",
		}
	}
};

wx.cloud.callFunction(params9).then(res =>{
	console.log('res', res);
}).catch(err => console.log('err', err))

// const params6 = {//公共api，进行天气的相关查询
// 	// name 云函数的名称，必须使用 ty-service
// 	name: "ty-service",
// 	data: {
// 		action: "weather.countryCities",
// 	// params 接口参数
// 		params: {
//     // "device_id": "vdevo161587489288606" // 填写自己的设备 id
//     "country_code": "cn"
// 		}
// 	}
// };

// wx.cloud.callFunction(params6).then(res =>{
// 	console.log('res', res);
// }).catch(err => console.log('err', err))


// const params6 = {
// 	// name 云函数的名称，必须使用 ty-service
// 	name: "ty-service",
// 	data: {
// 		action: "weather.countryCities",
// 	// params 接口参数
// 		params: {
//     // "device_id": "vdevo161587489288606" // 填写自己的设备 id
//     "country_code": "cn"
// 		}
// 	}
// };

// wx.cloud.callFunction(params6).then(res =>{
// 	console.log('res', res);
// }).catch(err => console.log('err', err)) 
const params8 = {//查询该用户下的设备
	// name 云函数的名称，必须使用 ty-service
	name: "ty-service",
	data: {
		action: "device.getDeviceList",
	// params 接口参数
		params: {
      "uid": "ay1615874890668SaRFW"
		}
	}
};

wx.cloud.callFunction(params8).then(res =>{
	console.log('res', res);
}).catch(err => console.log('err', err)) 

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
}).catch(err => console.log('err', err)) 
}
})
