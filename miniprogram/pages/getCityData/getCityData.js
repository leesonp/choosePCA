// pages/getCityData/getCityData.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    provinces:Array,
    citys:Array,
    areas:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    multiArray: [],
    multiIndex: [0,0,0]
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
    getCityInfo: function(){
      wx.showLoading({
        title: 'Loading...',
      })
      const db = wx.cloud.database()
      //因为数据库只存有一个总的数据字典，所以指定它的ID直接获取数据
      var that = this
      db.collection('cityDataArr').doc('5bdad6225f23a246bb2a97e1').get({
        success: res => {
          wx.hideLoading();
          if (res.data){
            var temp = res.data.data;
            that.setData({
              provinces: temp,
              multiArray: [temp, temp[0].citys, temp[0].citys[0].areas],
              multiIndex: [0, 0, 0]
            })
            console.log(that.data.provinces)
          }
        },
        fail: err => {
          wx.hideLoading();
          console.error(err)
        }
      })     
    },
    //点击确定
    bindMultiPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
    },
    //滑动
    bindMultiPickerColumnChange: function(e){
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      if (e.detail.column == 0){
        data.multiIndex = [e.detail.value,0,0];
      } else if (e.detail.column == 1){
        data.multiIndex = [data.multiIndex[0], e.detail.value, 0];
      } else if (e.detail.column == 2) {
        data.multiIndex = [data.multiIndex[0], data.multiIndex[1], e.detail.value];
      }
      var temp = this.data.provinces;
      data.multiArray[0] = temp;
      if ((temp[data.multiIndex[0]].citys).length > 0){
        data.multiArray[1] = temp[data.multiIndex[0]].citys;
        var areaArr = (temp[data.multiIndex[0]].citys[data.multiIndex[1]]).areas;
        data.multiArray[2] = areaArr.length > 0 ? areaArr : [];
      }else{
        data.multiArray[1] = [];
        data.multiArray[2] = [];
      }
      //data.multiArray = [temp, temp[data.multiIndex[0]].citys, temp[data.multiIndex[0]].citys[data.multiIndex[1]].areas];
      this.setData(data);
    }
  }
})
