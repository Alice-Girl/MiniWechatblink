const config = require('./config.js');

class Http {
  httpRequest(params) {
    wx.request({
      url: config.base_url + params.url,
      data: {
        'appkey': config.appkey
      },
      header: {
        'content-type': 'application/json'
      },
      method: params.method || 'GET',
      timeout: 0,
      success: (result) => {
        params.success(result.data)
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  }
}

module.exports = Http;