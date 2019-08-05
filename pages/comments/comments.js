/**
 * 评论区更多评论页面
 */
import {network} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentTotal:0,
    start:1,
    count:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    var that = this;
    that.setData(options);
    that.getComments(1);
  },
  
  getComments:function(start){
    var that = this;
    var type = that.data.type;
    var id = that.data.id;
    if(start > that.data.start){
      that.setData({
        nextLoading:true
      });
    }else {
      that.setData({
        preLoading: true
      })
    }
    network.getItemComment({
      type: type,
      id: id,
      start: start,
      count: 20,
      success: function (data) {
        // console.log(data);
        var total = data.total;
        var comments = data.interests;
        that.setData({
          total: total,
          comments: comments,
          preLoading:false,
          nextLoading:false
        })
      }
    })
  },

  onItemTapEvent:function(event){
    //微信自带返回上一页的内置方法
    wx.navigateBack({
      
    });
  },
  onPrePageTap:function(event){
    var that = this;
    var oldStart = that.data.start;
    if(oldStart - 20 > 0){
      var start = oldStart - 20;
      that.getComments(start);
      that.data.start = start;
      wx.pageScrollTo({
        scrollTop: 0,
      });
    }
  },
  onNextPageTap:function(event){
    var that = this;
    var oldStart = that.data.start;
    var start = oldStart + 20;
    that.getComments(start);
    that.data.start = start;
    wx.pageScrollTo({
      scrollTop: 0,
    });
  },

})