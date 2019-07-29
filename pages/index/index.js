import {network} from "network";
/**
 * module层，负责数据操作
 */

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    var that = this;

    //电影
    network.getMovieList({
      success: function (movie) {
        that.setData({
          movie: movie
        })
      }
    })
    //电视剧
    network.getTvsList({
      success:function(tvs){
        that.setData({
          tvs: tvs
        });
      }
    })
    //综艺
    network.getShowsList({
      success:function(shows){
        that.setData({
          shows:shows
        })
      }
    })
  },
  getUserInfo: function(e) {

  }
})
