// components/starts/starts.js
/**
 * 星星组件的使用，<starts rate="" fontSize="" fontColor="" starSize=""></starts>
 * rate : 必须，用于计算星星的数目
 * fontSize : 可选，评分字体大小，默认20rpx
 * fontColor : 可选，评分字体颜色，默认#ccc
 * starSize : 可选，星星大小，默认20rpx
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate:{
      type:Number,
      value:0
    },
    //默认的星星大小
    starSize:{
      type:Number,
      value:20//rpx
    },
    //默认的评分字体大小
    fontSize:{
      type:Number,
      value:20//rpx
    },
    //默认的评分颜色
    fontColor:{
      type:String,
      value:"#ccc"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  /**
   * 生命周期函数要放这里面
   */
  lifetimes:{
    attached:function(){
      var that = this;
      // console.log(that.properties.rate);
      var rate = that.properties.rate;
      //分数取整
      var intRate = parseInt(rate);
      //高亮星星
      var light = parseInt(intRate/2);
      //半颗星
      var hlaf = intRate%2;
      //灰色的星星
      var gray = 5-light-hlaf;
      // console.log('=================');
      // console.log(light);
      // console.log(hlaf);
      // console.log(gray);
      // console.log('=================');
      var lights = [],hlafs=[],grays=[];
      for(var i = 1; i <= light;i++){
        lights.push(i);
      }
      for (var i = 1; i <= hlaf; i++) {
        hlafs.push(i);
      }
      for (var i = 1; i <= gray; i++) {
        grays.push(i);
      }
      //判断分数，如果有值或该值大于零则保留一位小数，否则打印未评分
      var rateText = rate && rate>0 ? rate.toFixed(1):"未评分";


      //将数据设置到外部data中
      that.setData({
        lights:lights,
        hlafs:hlafs,
        grays:grays,
        rateText: rateText
      });
    }
  }
})
