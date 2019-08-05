/**
 * 搜索功能页面
 */
import {network} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"pages/detail/detail?type=movie&id="
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取本地数据缓存
    wx.getStorage({
      key: 'searched',
      success: function(res) {
        // console.log('本地数据缓存获取成功'+res);
        var data = res.data;
        that.setData({
          history:data
        })
      },
    })
  },
/**
 * 通过在模块用triggerEvent事件传递值，再在调用模块的地方用这个方法接收到
 */
  onSearchInputEvent:function(event){
    var that = this;
    console.log(event);
    var value = event.detail.value;
    
    //当删除搜索字样的时候搜索详情清除
    if(!value || value === ""){
      that.setData({
        subject:null
      });
      return;
    }
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
    // console.log(event);、
    var that = this;
    var id = event.currentTarget.dataset.id;
    var title = event.currentTarget.dataset.title;
    var history = that.data.history;
    var isHave = false;                    //是否已经存在该搜索记录
    // console.log(id+title);

  if(history){
    //如果搜索记录之前已经有了就不再添加
    for (var i = 0; i < history.length; i++) {
      var movie = history[i];
      if (movie.id === id) {
        isHave = true;
        break;
      }
    }
  }
    //如果不存在该搜索记录则添加进去
    if (!isHave) {
      //如果历史记录不存在则将历史记录设置为空数组，防止报错
      if(!history){
        history = [];
      }
      history.push({ id: id, title: title });
      // isHave = false;
      //将数据保存到本地
      wx.setStorage({
        key: 'searched',
        // data: [{id:id,title:title}],
        data: history,
        success: function () {
          console.log('本地缓存浏览数据保存成功');
        }
      });
    }



    wx.navigateTo({
      url: '../detail/detail?type=movie&id='+id,
    })
  },

/**
 * 清除历史记录缓存按钮事件
 */
  onClearEvent:function(event){
    var that = this;
    wx.removeStorage({
      key: 'searched',
      success: function(res) {
        console.log('浏览记录缓存删除成功');
      },
    });
    that.setData({
      history:null
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