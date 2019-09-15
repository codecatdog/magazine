// components/subscribe/cmp.js
import { Subscribe } from "../../models/subscribe.js"
const subscribe = new Subscribe()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    class: 'common',
    myTagList: []
  },

  attached() {
    this.judgeTag()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      //tag信息
      const mark = {
        tag: this.properties.tag,
        tagId: this.properties.tagId
      }
      //缓存
      if(this.data.class === 'common') {
        const myTagList = this.getMyTagList()
        myTagList.push(mark)
        subscribe.setMyTagList(myTagList)
      } else {
        subscribe.removeMyTag(mark.tagId)
      }
     this.toggleClass()
     this.triggerEvent('tap')
    },

    getMyTagList () {
      const myTagList = subscribe.getMyTagList()
      this.setData({
        myTagList
      })
      return myTagList
    },

    judgeTag () {
      const myTagList = this.getMyTagList()
      myTagList.forEach(item => {
        if(item.tagId === this.properties.tagId) {
          this.setData({
            class: 'subscribe'
          })
        }
      })
    },

    toggleClass() {
      let className = '';
      if (this.data.class === 'common') {
        className = 'subscribe'
      } else {
        className = 'common'
      }
      this.setData({
        class: className
      })
    }
  }
})
