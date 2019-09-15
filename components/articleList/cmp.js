// components/articleList/cmp.js
import { IndexModel } from "../../models/index.js"
const indexModel = new IndexModel()
import { SearchModel } from '../../models/search.js'
const searchModel = new SearchModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // articleList: Array
    articleList: {
      type: Array,
      value: [],
      observer() {
        
      }
    },
    more: {
      type: String,
      value: '',
      observer: 'loadMore'
    },
    magazineId: {
      type: Number,
      value: 0,
      observer: 'resetNomoreData'
    },
    word: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    type: ''
  },
  attached() {
    const curPages = getCurrentPages()
    const index = curPages.length - 1
    let type = ''
    if (curPages[index].route === 'pages/search/search') {
      type: 'search'
    } else {
      type = 'index'
    }

    this.setData({
      type
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    resetNomoreData() {
      this.setData({
        noMoreData: false
      })
    },
    loadMore() {
      if(this._isLock() || this.data.noMoreData) {
        return
      }
      this._loadLock();
      if(this.data.type === 'search') {
        const word = this.data.word
        const start = this.data.articleList.length

        searchModel.getArticalList(word, start).then(res => {
          this._setMoreData()
          this._unloadLock()
        })
      } else {
        const magazineId = this.data.magazineId
        const start = this.data.articleList.length

        indexModel.getArticalList(magazineId, start).then(res => {
          this._setMoreData(res)
          this._unloadLock()
        })
      }

      
    },
    /**是否一次请求已完成 */
    _isLock() {
      return this.data.loading
    },
    /**加锁 */
    _loadLock() {
      this.setData({
        loading: true
      })
    },
    /**解锁 */
    _unloadLock() {
      this.setData({
        loading: false
      })
    },
    /**合并每次请求的数据列表 */
    _setMoreData(list) {
      if (list.length == 0) {
        this.setData({
          noMoreData: true
        })
        return
      }
      const combineList = this.data.articleList.concat(list)
      this.setData({
        articleList: combineList
      })
    }

  }
})
