/**
 * 存放所有网络请求需要用到的链接，在network文件调用
 * 使用：
 * import {globalUrls} from "...urls.js文件相对地址..";
 * var url = globalUrls.movieList;
 */

const globalUrls = {
  movieList: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
  tvsList: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items',
  showsList: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items',
  movieDetail:"https://m.douban.com/rexxar/api/v2/movie/",
  tvDetail:"https://m.douban.com/rexxar/api/v2/tv/",
  showDetail:"https://m.douban.com/rexxar/api/v2/tv/",
  movieTags:function(id){
    return "https://m.douban.com/rexxar/api/v2/movie/"+id+"/tags?count=8";
  },
  tvTags: function (id) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8";
  },
  showTags:function(id){
    return this.tvTags(id);
  },
  movieComment:function(id,count=3,start=0){
    return 'https://m.douban.com/rexxar/api/v2/movie/' + id + '/interests?count=' + count + '&start='+ start;
  },
  tvComment: function (id, count = 3, start = 0) {
    return 'https://m.douban.com/rexxar/api/v2/tv/' + id + '/interests?count=' + count + '&start=' + start;
  },
  showComment:function(id, count=3,start=0){
    return this.tvComment(id,count,start);
  },
  searchUrl: function (q) {
    return 'https://m.douban.com/rexxar/api/v2/search?type=movie&q=' + q;
  }
}

export { globalUrls };