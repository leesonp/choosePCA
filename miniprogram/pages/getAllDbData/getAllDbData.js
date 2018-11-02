// miniprogram/pages/getAllDbData.js
var area = require('../../data/cityData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init({
      env: 'leeson'
    })

    //getCityInfo();

    //updateCityInfo()

    //insertCityData()

    //insertCloudCityInfo()

    // updateCloudCityInfo("cityInfo", "W9lWQNx_Lia3NP6g", {
    //   name: "昭君",
    //   sex: "woman",
    //   age: "26"
    // })

    //getCityInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //调用云函数获取云数据库数据
  showAllData: function(){
    var that = this;
    wx.cloud.callFunction({
      name: 'getAllDbData',
      data: {},
      success: res => {
        wx.showToast({
          title: '调用成功',
        })
        console.log(res.result.data)
        that.setData({
          info: res.result.data,
        });
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [getAllDbData] 调用失败：', err)
      }
    })
  },
  //去地址选择器界面
  gotoCityDataPage(){
    wx.navigateTo({
      url: '../getCityData/getCityData',
    })
  },
  gotoCityInfoPage(){
    wx.navigateTo({
      url: '../choosePCA/choosePCA',
    })
  }
})

//获取cityInfo表的全部数据
function getCityInfo(){
  const db = wx.cloud.database()
  db.collection('cityInfo').doc('5bd7d0855f23a246bb2982a2').get({
    success: res => {
      console.log(res.data)
    },
    fail: err => {
      console.error(err)
    }
  })

  getCityArr();
}

//根据条件获取‘cityArr’表的数据
function getCityArr(){
  const db = wx.cloud.database()
  db.collection('cityArr').where({
    parent: '430900'
  })
  .get({
    success: function (res) {
      // res.data 是包含以上定义的两条记录的数组
      console.log(res.data)
    }
  })
}

//更新数据
function updateCityInfo(){
  const db = wx.cloud.database()
  const _ = db.command
  db.collection('cityInfo').doc('W9lWQNx_Lia3NP6g').update({
    // data 传入需要局部更新的数据
    data: {
      name: "小红",
      sex: "woman",
      age: "24"
    },
    success: function (res) {
      console.log(res)
    }
  })
}

//插入数据
function insertCityData(){
  const db = wx.cloud.database()
  db.collection('cityInfo').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      name: "小明",
      sex: "man",
      age: "18",
    },
    success: function (res) {
      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      console.log(res)
    }
  })
}

//云函数插入数据
function insertCloudCityInfo(){
  wx.cloud.callFunction({
    name: 'insetDbData',
    data: {
      tableName: "cityInfo",
      data: {
        name: "小乔",
        sex: "woman",
        age: "22"
      }
    },
    success: res => {
      console.log(res)
    },
    fail: err => {
      console.error('[云函数] [getAllDbData] 调用失败：', err)
    }
  })
}

//云函数更新数据
function updateCloudCityInfo(name,Id,Info){
  wx.cloud.callFunction({
    name: 'updateDbData',
    data: {
      tableName: name,
      ID: Id,
      data: Info
    },
    success: res => {
      console.log(res)
    },
    fail: err => {
      console.error('[云函数] [getAllDbData] 调用失败：', err)
    }
  })
}

function getCityInfo() {
  const db = wx.cloud.database()
  var that = this
  db.collection('cityInfo').doc('5bd7d0855f23a246bb2982a2').get({
    success: res => {
      if (res.data) {
        var temp = res.data.data;
        // temp.splice(22, 1)
        updateCloudCityInfo("cityInfo", "5bd7d0855f23a246bb2982a2", { data: temp})
      }
    },
    fail: err => {
      console.error(err)
    }
  })


}