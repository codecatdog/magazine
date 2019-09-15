// components/bigImg/cmp.js
import { myBeh } from "../behaviors/my-behavior.js"
Component({
  behaviors: [myBeh],
  /**
   * 组件的属性列表
   */
  properties: {
  
    // 由外部传给自定义组件的属性
  //   imgSrc: {
  //     type: String,  //数据类型
  //     value:   "http://i0.hdslb.com/bfs/article/f9321b20c7cf75c1271dd992a8a01c84dbc216cf.jpg",  //初始值
  //     observer: function(newValue, oldValue, changePath) {
  //       //当imgSrc发生改变时会触发
  //     }
  //   },
  //   mainTitle: {
  //     type: String,
  //     value: 'hahaha',
  //     observer: function() {

  //     }
  //   }
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
