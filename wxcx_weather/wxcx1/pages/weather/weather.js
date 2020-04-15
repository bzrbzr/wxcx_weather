// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    default_region:['江苏省','南京市','江宁区'],
    now:'',
    img_numb:999
  },
  regionchange:function(e){
    this.setData({
      default_region:e.detail.value
    })
    this.getweather();
  },
  getweather:function(){
    var that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:this.data.default_region[1],
        key:'a8cc95981a854ce680a8f664c14a91b9'
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          now:res.data.HeWeather6[0].now,
          img_numb:res.data.HeWeather6[0].now.cond_code
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getweather();
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