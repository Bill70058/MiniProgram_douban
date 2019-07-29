/**
 * controller层，负责网络请求数据
 */
import {globalUrls} from "../../utils/urls.js";
const network = {
  getMovieList:function(parse){
    wx.request({
      url: globalUrls.movieList,
      data:{count:7},
      success: function (res) {
        var movie = res.data.subject_collection_items;
        console.log(movie);
        //通过回调传movie
        if(parse && parse.success){
          parse.success(movie);
        }
      }
    });
  },
  getTvsList:function(parse){
    wx.request({
      url: globalUrls.tvsList,
      data:{count:7},
      success: function (res) {
        // console.log(res);
        var tvs = res.data.subject_collection_items;
        console.log(tvs);
        if(parse && parse.success){
          parse.success(tvs);
        }
      }
    });
  },
  getShowsList:function(parse){
    wx.request({
      url: globalUrls.showsList,
      data:{count:7},
      success: function (res) {
        // console.log(res);
        var shows = res.data.subject_collection_items;
        console.log(shows);
        if (parse && parse.success) {
          parse.success(shows);
        }
      }
    });
  }
}

export {network};