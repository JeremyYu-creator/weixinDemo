import request from '../request'
// 获取体重秤数据的api

// 获取体脂秤称重记录   暴露了方法，直接作为方法动态的去传值调用即可，没必要在这里直接写死
export const getScalesRecord = (page_no , page_size) => {
  return request({
    name: 'ty-service',
    data: {
      action: 'scales.historyData',
      params: {
        "device_id": "6061313568c63ae228ba",
        "page_no": page_no,
        "page_size": page_size,
      }
    }
  })
}

// 计算体脂报告
export const userInfo = (params)=> {
  return request({
  name: 'ty-service',
  data: {
    action: 'scales.analysis-reports',
    "params": params
  }
})
}

// 获取设备详情
export const deviceDetails = () => {
  return request({
    name: 'ty-service',
    data: {
      action: "device.details",
	    params: {
		    "device_id": "6061313568c63ae228ba"
	    }
    }
  })
}

// 获取设备的指令详情
export const codes = () => {
  return request({
    name: 'ty-service',
    data: {
      action: "device.specifications",
	    params: {
		    "device_id": "6061313568c63ae228ba"
	    }
    }
  })
}

// 获取该类设备的指令集 ---- 不支持其他类型的产品
// export const codesMsg = () => {
//   return request({
//     name: 'ty-service',
//     data: {
//       action: "device.functionsByCategory",
// 	    params: {
// 		    category: "qt"
// 	    }
//     }
//   })
// }

//"g0er6hSKgMqrVMuf" 根据产品ID获取设备列表
// export const productTest = () => {
//   return request({
//     name: 'ty-service',
//     data: {
//       action: "device.getListByProduct",
// 	    params: {
// 		    "product_id": 'g0er6hSKgMqrVMuf'
// 	    }
//     }
//   })
// }