/**
 * 单个信息块的组件：用于indexModule文件
 * 使用：<itemView wx:for="{{items}}" wx:key="{{item.title}}" item="{{item}}" itemurl="../../pages/detail/detail?type={{type}}&id={{item.id}}"></itemView>
 * item：必选，传入信息对象
 * itemurl：必选，传入图片地址
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{}
    },
    itemurl:{
      type:String,
      value:""
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

  }
})
