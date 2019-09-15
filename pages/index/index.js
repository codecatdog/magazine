//index.js
//获取应用实例
const app = getApp()
import {IndexModel} from "../../models/index.js"
import {random} from "../../utils/random.js"
const indexModel = new IndexModel();

Page({
  data: {
    articleList: [],
    markList: [],
    recommend: {},
    getMore: '',
    magazineId: 0,
    loading: true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (optios) {
    this.getData()
  },
  
  /**滚动条到底部时触发 */
  onReachBottom() {
    this.setData({
      getMore: random(20)
    })
  },
  onCatelog() {
    /**navigateto不能跳转tabBar */
    // wx.navigateTo({
    //   url: '/pages/catalog/catalog',
    // })
    wx.switchTab({
      url: '/pages/catalog/catalog',
    })
  },
  onNav(e) {
    const magazineId = e.detail.index
    this.resetData()
    this.setMagazineId(magazineId)
    this.scrollPageToTop()
    this.getData(magazineId)
  },
  getData(magazineId) {
    const recommend = indexModel.getRecommend(magazineId)
    const markList = indexModel.getMarkList(magazineId)
    const articleList = indexModel.getArticalList(magazineId)
    Promise.all([recommend, markList, articleList]).then(res => {
      this.setData({
        articleList: res[2],
        markList: res[1],
        recommend: res[0]
      })
      // wx.hideLoading()
      this.hideLoading()
    })
  },
  hideLoading() {
    this.setData({
      loading: false
    })
  },
  resetData() {
    this.setData({
      articleList: [],
      markList: [],
      recommend: {}
    })
  },
  scrollPageToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },
  setMagazineId(magazineId) {
    this.setData({
      magazineId: magazineId
    })
  }
})
