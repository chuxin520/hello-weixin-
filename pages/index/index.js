//index.js
//获取应用实例
var flag = true;
var app = getApp()
Page({
  // 数据，有点类似于vue了
  data: {
    motto: 'Hello xiaochengxu',
    userInfo: {},
    color: "pink"
  },
  clickRed: function () {
    this.setData({
      color: "red"
    })
  },
  clickgreen: function () {
    this.setData({
      color: "yellow"
    })
  },
  //事件处理函数
//   Page.prototype.setData()
// setData 函数用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值。
// 注意：
// 直接修改 this.data 无效，无法改变页面的状态，还会造成数据不一致。
// 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
// setData() 参数格式
// 接受一个对象，以 key，value 的形式表示将 this.data 中的 key 对应的值改变成 value。
// 其中 key 可以非常灵活，以数据路径的形式给出，如 array[2].message，a.b.c.d，并且不需要在 this.data 中预先定义。
// // 
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
