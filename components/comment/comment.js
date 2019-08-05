/**
 * 评论区内容组件：用于detail文件,comments文件
 * 使用：<comment item="{{..}}></comment>
 * item：必选，评论区详细内容对象 -- 通过api获取，可在调用文件的js文件获取到数据后再同步到data再在前端使用
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{}
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
