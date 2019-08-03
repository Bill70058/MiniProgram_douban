// pages/list/list.js

import {network} from "../../utils/network.js";
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
    var type = options.type;
    var that = this;
    var title = "";
    this.setData({
      type:type
    })
    //加载提示
    wx.showLoading({
      title: '正在加载中...',
    });
    if(type === "movie"){ 
      title = "电影";
      //请求电影数据
      network.getMovieList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count:48
      });
    }else if(type === "tv"){
      title = "电视剧";
      //请求电视剧数据
      network.getTvsList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 48
      });
    }else if(type === "show"){
      title = "综艺";
      //请求综艺数据
      network.getShowsList({
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        },
        count: 48
      });
    }else {
      console.log("list文件网络请求失败");
    }
    
    wx.setNavigationBarTitle({
      title: title,
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