// components/starts/starts.js
/**
 * 星星组件：用于itemView文件、comment文件、detail文件
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
      value:0,
      //属性被改变时执行的函数：新数据、旧数据、更改路径
      observer(newVal,oldVal,changePath){
        this.updataRate();
      }
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
    updataRate:function(){
      var that = this;
      // console.log(that.properties.rate);
      var rate = that.properties.rate;
      //分数取整
      var intRate = parseInt(rate);
      //高亮星星
      var light = parseInt(intRate / 2);
      //半颗星
      var hlaf = intRate % 2;
      //灰色的星星
      var gray = 5 - light - hlaf;
      // console.log('=================');
      // console.log(light);
      // console.log(hlaf);
      // console.log(gray);
      // console.log('=================');
      var lights = [], hlafs = [], grays = [];
      for (var i = 1; i <= light; i++) {
        lights.push(i);
      }
      for (var i = 1; i <= hlaf; i++) {
        hlafs.push(i);
      }
      for (var i = 1; i <= gray; i++) {
        grays.push(i);
      }
      //判断分数，如果有值或该值大于零则保留一位小数，否则打印未评分
      var rateText = rate && rate > 0 ? rate.toFixed(1) : "未评分";


      //将数据设置到外部data中
      that.setData({
        lights: lights,
        hlafs: hlafs,
        grays: grays,
        rateText: rateText
      });
    }
  },
  /**
   * 生命周期函数要放这里面
   */
  lifetimes:{
    /**
     * 该钩子事件是当组件一旦被加载就会被调用到，但是由于星星的渲染是通过网络请求的，在渲染时间上有些慢，钩      * 子事件被触发加载的时候渲染未完成就会变成数据获取到了但是星星没有被渲染成功，因此需要用到“ observer      * ”事件，该事件是数据发生改变时会调用到，也就是说将逻辑代码封装为一个方法“ updateRate ”，当加载完成       * 时调用，星星渲染时再次调用，就不会要等待星星渲染完成再加载，对于用户体验性能会提高
     */
    attached:function(){
      this.updataRate();
    }
  }
})
