Component({
  properties:{
    isnavigator:{
      type:Boolean,
      value:false
    }
  },
  data:{

  },
  methods:{
    //监听input标签的变化
    onInputEvent:function(event){
      //  console.log(event);
      //获取到input标签的值
      var value = event.detail.value;
      var detail = {'value':value};
      var options= {};
      //绑定一个触发事件，将值通过这个事件传递出去调用的地方
      this.triggerEvent("searchinput",detail,options);
    }
  }
})