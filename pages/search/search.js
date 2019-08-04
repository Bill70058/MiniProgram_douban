// pages/search/search.js
import {network} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
/**
 * 通过在模块用triggerEvent事件传递值，再在调用模块的地方用这个方法接收到
 */
  onSearchInputEvent:function(event){
    var that = this;
    console.log(event);
    var value = event.detail.value;
    network.getSearch({
      q:value,
      success:function(data){
      //  console.log(data);
      that.setData({
        subject:data
      })
      }
    })
  },
  
  onItemTapEvent:function(event){
    // console.log(event);
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?type=movie&id='+id,
    })
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