/**
 * controller层，负责网络请求数据，存放了所有数据请求方法，使用时导入该文件即可使用文件内的网络请求方法
 * 使用：
 * import {network} from "...network文件相对地址..."
 * network.getMovieList();
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
        // console.log(items);
        if (parse && parse.success) {
          parse.success(items);
        }
      }
    });
  },
/**
 * 细节页面网络请求
 */
  getItemDetail:function(parse){
    var type = parse.type;
    var id = parse.id;
    var url = "";
    if(type == "movie"){
      url = globalUrls.movieDetail+id;
    }else if(type == "tv"){
      url = globalUrls.tvDetail+id;
    }else if(type == "show"){
      url = globalUrls.showDetail+id;
    }else {
      console.log("network文件下getItemDetail方法网络请求失败");
    }
    wx.request({
      url: url,
      success:function(res){
        // console.log(res);
        var item = res.data;
        //如果外部调用getItemDetail函数传入了success方法就将url获取到的data传出去
        if(parse.success){
          parse.success(item);
        }
      }
    })
  },

  /**
   * 获取目标标签
   */
  getItemTags:function(parse){
    var type = parse.type;
    var id = parse.id;
    var url = "";
    if(type == "movie"){
      url = globalUrls.movieTags(id);
    }else if(type = "tv"){
      url = globalUrls.tvTags(id);
    }else if(type = "show"){
      url = globalUrls.showTags;
    }else {
      console.log("network文件的getItemTags函数网络请求失败");
    }
    wx.request({
      url: url,
      success:function(res){
        // console.log(res);
        var tags = res.data.tags;
        if(parse.success){
          parse.success(tags);
        }
      }
    })
  },

  /**
   * 获取评论详情网络请求
   */
  getItemComment:function(parse){
    var type = parse.type;
    var id = parse.id;
    var start = parse.start?parse.start:0;
    var count = parse.count?parse.count:3;
    var url = "";
    if(type == "movie"){
      url = globalUrls.movieComment(id,count,start);
    }else if(type == "tv"){
      url = globalUrls.tvComment(id,count,start);
    }else if(type == "show"){
      url = globalUrls.showComment(id,count,start);
    }else {
      console.log("network文件getItemComment函数网络请求失败");
    }
    wx.request({
      url: url,
      success:function(res){
        // console.log(res);
        //获取到数据
        var data = res.data;
        //如果外部有success方法请求数据则返出数据
        if(parse.success){
          parse.success(data);
        }
      }
    })
  },
  //搜索item
  getSearch:function(parse){
    var q = parse.q;
    var url = globalUrls.searchUrl(q);
    wx.request({
      url: url,
      success:function(data){
        var data = data.data.subjects;
        if(parse.success){
          parse.success(data);
        }
      }
    })
  }
}

export { network };