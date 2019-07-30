/**
 * controller层，负责网络请求数据
 */
import { globalUrls } from "urls.js";
const network = {
  getMovieList: function (parse) {
    parse.type = "movie";
    this.getItemList(parse);
  },
  getTvsList: function (parse) {
    parse.type = "tv";
    this.getItemList(parse);
  },
  getShowsList: function (parse) {
    parse.type = "show";
    this.getItemList(parse);
  },

  getItemList:function(parse){
    var url = "";
    if(parse.type == "movie"){
      url = globalUrls.movieList;
    }else if(parse.type == "tv"){
      url = globalUrls.tvsList;
    }else if(parse.type == "show"){
      url = globalUrls.showsList;
    }else {
      console.log("network文件网络请求失败");
    }
    var count = parse.count?parse.count:7;
    wx.request({
      url: url,
      data: { count: count },
      success: function (res) {
        // console.log(res);
        var items = res.data.subject_collection_items;
        console.log(items);
        if (parse && parse.success) {
          parse.success(items);
        }
      }
    });
  }
}

export { network };