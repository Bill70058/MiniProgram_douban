/**
 * 主页大信息块组件：用于index文件 -- 电影、电视剧、综艺
 * 使用：<indexModule title="电影" items="{{movie}}" moreurl="/pages/list/list?type=movie" type="movie"></indexModule>
 * title：必选，信息块的名称
 * moreurl：必选，信息块 -- “更多”按钮的地址
 * items：必选，信息块详细信息数组
 * type：必选，信息块类型 -- 电影、电视剧、综艺
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:''
    },
    moreurl:{
      type:String,
      value:''
    },
    items:{
      type:Array,
      value:[]
    },
    type:{
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
