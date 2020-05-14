// pages/components/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: -1,
    buttonForbid: false,
    toright: true,
    currentPage: 0,
    pageNum: 6,
    swiperitem: [
      {
        value: "view1",
        show: true
      }, {
        value: "view2",
        show: false
      }, {
        value: "view3",
        show: false
      }, {
        value: "view4",
        show: false
      }, {
        value: "view5",
        show: false
      },
      {
        value: "view6",
        show: false
      },
    ],
    viewcode: [
      {
        'html':
          `<view>这是一个简单的view组件</view>`
      },
      {
        'html':
          `<view hover-class="view2" hover-start-time="10" hover-stay-time="400">这是增加了点击态效果的view组件</view>`
      },
      {
        'html':
          `<view style="display:flex;">
  <view style='background-color:red;flex-grow:1;height:100rpx;'>水平</view>
  <view style='background-color:rgb(105, 170, 243);flex-grow:1;height:100rpx;'>并排</view>
  <view style='background-color:rgba(146, 245, 162, 0.932);flex-grow:1;height:100rpx;'>view组件</view>
</view>`
      },
      {
        html:
          `<view style='display:flex;height:100rpx;'>
  <view style='background-color:red;width:250rpx'>左右</view>
  <view style='flex-grow:1;display:flex;flex-direction:column;'>
    <view style='flex-grow:1;background-color:rgb(105, 170, 243)'>混合</view>
    <view style='flex-grow:1;background-color:rgba(146, 245, 162, 0.932)'>view组件</view>
  </view>
</view>`
      },
      {
        html:
          `<view style='display:flex;flex-direction:column;height:150rpx;'>
  <view style='flex-grow:1;background-color:red'>上下</view>
  <view style='flex-grow:1;background-color:rgb(105, 170, 243)'>排列</view>
  <view style='flex-grow:1;background-color:rgba(146, 245, 162, 0.932)'>view组件</view>
</view>`
      }
    ],
    textcode: [
      {
        html:
          `<text slot="demonam">这是一个简单的text组件</text>`
      },
      {
        html:
          `<text selectable="true">这是一个可选择的text组件</text>`
      },
      {
        html:
          `<text slot="demoname" selectable="true" space="emsp">这   是   一个显示连续空格的text组件</text>`
      }
    ],
    //icon
    iconcode: [
      {
        html:
          `<icon type="success" size="50"></icon> \n<icon type="info" size="50"></icon> \n<icon type="warn" size="50" color="gray"></icon> \n<icon type="warn" size="40" ></icon> \n<icon type="waiting" size="40"></icon>`
      },
      {
        html:
          `<icon type="success_no_circle" size="50"></icon> \n<icon type="circle" size="50"></icon> \n<icon type="download" size="50"></icon>`
      },
      {
        html:
          `<icon type="info_circle" size="50"></icon> \n<icon type="cancel" size="50"></icon> \n<icon type="search" size="50"></icon>`
      },
    ],
    //progress
    progresscode: [
      {
        html:
          `<progress percent="40" show-info stroke-width="3"/>`
      },
      {
        html:
          `<progress percent="60" />`
      },
      {
        html:
          `<progress percent="80" color="#10AEFF" active stroke-width="3" />`
      },
    ],
    //richtext
    nbsphtml: '<div class="div_class" style="line-height: 60px; color: red;">这是根据字体设置大小的&nbsp;&nbsp;&nbsp;&nbsp;四个连续空格!</div>',
    ensphtml: '<div class="div_class" style="line-height: 60px; color: red;">这是中文字符空格一半大小的&ensp;&ensp;&ensp;&ensp;四个连续空格!</div>',
    emsphtml: '<div class="div_class" style="line-height: 60px; color: red;">这是中文字符空格大小的&emsp;&emsp;&emsp;&emsp;四个连续空格!</div>',
    html: '<div class="div_class" style="line-height: 60px; color: red;">Hello&nbsp;World!</div>',
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    richtextcode: [
      {
        html:
          `<view class="page-section">
  <view class="rich-text-wrp">
    <rich-text nodes="{{html}}" bindtap="tap">
    </rich-text>
  </view>
</view>`,
        js:
          `Page({
  data: {
    html: '<div class=\"div_class\" style=\"line-height: 60px; color: red;\">Hello&nbsp;World!</div>'
  },
  tap() {
    console.log('tap')
  }
})`,
        css:
          `rich-text {
　width: 700rpx;
　padding: 25rpx 0;
}

.rich-text-wrp {
　padding: 0 25rpx;
　background-color: #fff;
}

.page-section{
　width: 100%;
　margin-bottom: 60rpx;
}

.page-section:last-child{
　margin-bottom: 0;
}

.page-section-title{
　font-size: 28rpx;
　color: #999999;
　margin-bottom: 10rpx;
　padding-left: 30rpx;
　padding-right: 30rpx;
}`
      },
      {
        html:
          `<view class="page-section">
  <view class="rich-text-wrp">
    <rich-text nodes="{{html}}" bindtap="tap">
    </rich-text>
  </view>
</view>`,
        js:
          `Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
  tap() {
    console.log('tap')
  }
})`,
        css:
          `rich-text {
　width: 700rpx;
　padding: 25rpx 0;
}

.rich-text-wrp {
　padding: 0 25rpx;
　background-color: #fff;
}

.page-section{
　width: 100%;
　margin-bottom: 60rpx;
}

.page-section:last-child{
　margin-bottom: 0;
}

.page-section-title{
　font-size: 28rpx;
　color: #999999;
　margin-bottom: 10rpx;
　padding-left: 30rpx;
　padding-right: 30rpx;
}`
      },
      {
        html:
          `<rich-text space="nbsp" nodes="{{nbsphtml}}"></rich-text>`,
        js:
          `Page({
  data: {
    nbsphtml: '<div class="div_class" style="line-height: 60px; color: red;">这是根据字体设置大小的&nbsp;&nbsp;&nbsp;&nbsp;四个连续空格!</div>'
  }
})`
      },
      {
        html:
          `<rich-text space="ensp" nodes="{{ensphtml}}"></rich-text>`,
        js:
          `Page({
  data: {
    ensphtml: '<div class="div_class" style="line-height: 60px; color: red;">这是中文字符空格一半大小的&ensp;&ensp;&ensp;&ensp;四个连续空格!</div>'
  }
})`
      },
      {
        html:
          `<rich-text space="emsp" nodes="{{emsphtml}}"></rich-text>`,
        js:
          `Page({
  data: {
    emsphtml: '<div class="div_class" style="line-height: 60px; color: red;">这是中文字符空格大小的&emsp;&emsp;&emsp;&emsp;四个连续空格!</div>'
  }
})`
      }
    ],
    //swiper
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    swipercode: [
      {
        html:
          `<swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" circular="{{circular}}" vertical="{{vertical}}" interval="{{interval}}" duration="{{duration}}" previous-margin="{{previousMargin}}px" next-margin="{{nextMargin}}px">　
  <swiper-item>
    <view class="swiper-item demo-text-2"></view>
  </swiper-item>
  <swiper-item>
    <view class="swiper-item demo-text-3"></view>
  </swiper-item>
  <swiper-item>
    <view class="swiper-item demo-text-1"></view>
  </swiper-item>
</swiper>`
      }
    ]
  },
  tap() {
    //richtext
    console.log('tap')
  },
  //swiper
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)

    this.stringTemplate()
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  
  tobefore(e) {
    if (this.data.currentPage === 0 || this.data.buttonForbid) {
      return
    }
    let list1 = this.data.swiperitem
    list1[parseInt(this.data.currentPage) - 1].show = true
    this.setData({
      swiperitem: list1,
      toright: false,
      buttonForbid: true
    })
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    let width = this.data.width;;
    // query.select('#container').boundingClientRect(function (rect) {
      // console.log(rect.width)
      // that.setData({
      // width = rect.width
      // })
      that.animate('#slide-area', [
        { opacity: 1.0, translateX: 0 },
        { opacity: 1.0, translateX: 0.5 * width },
        { opacity: 1.0, translateX: width },
      ], 300, function () {
        let list2 = that.data.swiperitem
        list2[parseInt(that.data.currentPage)].show = false
        that.setData({
          swiperitem: list2,
          currentPage: parseInt(that.data.currentPage) - 1,
          toright: true,
          buttonForbid: false
        })
        that.clearAnimation('#slide-area', { opacity: true, translateX: true }, function () {

          console.log("清除了#container上的opacity和rotate属性")
        })
      }.bind(that))
    // }).exec();

  },
  tonext(e) {
    if (this.data.currentPage === this.data.pageNum - 1 || this.data.buttonForbid) {
      return
    }
    let list1 = this.data.swiperitem
    list1[parseInt(this.data.currentPage) + 1].show = true
    this.setData({
      swiperitem: list1,
      toright: true,
      buttonForbid: true
    })
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    let width = this.data.width;
    // query.select('#container').boundingClientRect(function (rect) {
      // console.log(rect.width)
      // that.setData({
      // width = rect.width
      // })
      that.animate('#slide-area', [
        { opacity: 1.0, translateX: 0 },
        { opacity: 1.0, translateX: -0.5 * width },
        { opacity: 1.0, translateX: -width },
      ], 300, function () {
          let list2 = that.data.swiperitem
        list2[parseInt(that.data.currentPage)].show = false
        that.setData({
          swiperitem: list2,
          currentPage: parseInt(that.data.currentPage) + 1,
          buttonForbid: false
        })
          // console.log(that.data.swiperitem)
        that.clearAnimation('#slide-area', { opacity: true, translateX: true }, function () {
          console.log("清除了#container上的opacity和rotate属性")
        })
      }.bind(that))
    // }).exec();

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.select('#container').boundingClientRect(function (rect) {
      // console.log(rect.width)
      // that.setData({
      that.setData({
        width: rect.width
      })
    }).exec();
    console.log(options)
    let list = this.data.swiperitem
    list[0].show = false
    list[options.index].show = true
    this.setData({
      swiperitem: list,
      currentPage: options.index
    })
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

  }
})