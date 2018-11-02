// miniprogram/pages/choosePCA/choosePCA.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    provinces: Array,
    citys: Array,
    areas: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    multiArray: [],
    multiIndex: [0, 0, 0],
    province: "湖南省",
    city: "长沙市",
    area: "岳麓区"
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this.getCityInfo()
    },
    moved: function () { },
    detached: function () { },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //获取数据库数据
    getCityInfo: function () {

    }
  }
})
