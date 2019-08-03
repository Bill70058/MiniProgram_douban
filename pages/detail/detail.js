// pages/detail/detail.js
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
    var that = this;
    // console.log(options);
    var type = options.type;
    var id = options.id;
    that.setData({
      type:type,
      id:id
    })
    network.getItemDetail({
      type:type,
      id:id,
      success:function(res){
        //获取电影名外国名字
        var outSide = res.aka.length-1;
        // console.log(outSide);
        outSide = res.aka[outSide];
        //将演员列表设置为只显示前七个
        var actors = res.actors;
        var actor = [];
        for(var i = 0; i < actors.length; i++){
          actor.push(actors[i].name);
        }
        if (actor.length > 6){
          actor = actor.slice(0,6);
        }
          actor = actor.join("/");
        //将影片类型以中间插入“/”的形式展现
        var genres = res.genres;
        genres = genres.join("/");
        res.genres = genres;
        //在这里拿到network请求的data数据
        // console.log(res);
        that.setData({
          item:res,
          actor:actor,
          outSide:outSide
        })
      }
    });
    //将从network获取到的标签同步到data中，再在wxml文件wx:for="{{tags}}"
    network.getItemTags({
      type:type,
      id:id,
      success:function(tags){
        // console.log(res);
        that.setData({
          tags:tags
        })
      }
    });
    //获取评论详情
    network.getItemComment({
      type:type,
      id:id,
      success:function(data){
        console.log(data);
        var commentTotal = data.total;
        var comments = data.interests;
        that.setData({
          comments:comments,
          commentTotal:commentTotal
        })
      }
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
    //当页面被展现时，滚动到页面最顶端更加美观
    wx.pageScrollTo({
      scrollTop: 0,
    })
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