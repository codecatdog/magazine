// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    // imgArr: ["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg", "http://i0.hdslb.com/bfs/article/f9321b20c7cf75c1271dd992a8a01c84dbc216cf.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1022109268,3759531978&fm=27&gp=0.jpg", "http://i0.hdslb.com/bfs/article/f9321b20c7cf75c1271dd992a8a01c84dbc216cf.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1457704519,3529830056&fm=27&gp=0.jpg", "http://i0.hdslb.com/bfs/article/f9321b20c7cf75c1271dd992a8a01c84dbc216cf.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=180868167,273146879&fm=27&gp=0.jpg", "http://i0.hdslb.com/bfs/article/f9321b20c7cf75c1271dd992a8a01c84dbc216cf.jpg", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1718395925,3485808025&fm=27&gp=0.jpg", "http://i0.hdslb.com/bfs/article/f9321b20c7cf75c1271dd992a8a01c84dbc216cf.jpg", "http://i0.hdslb.com/bfs/article/f9321b20c7cf75c1271dd992a8a01c84dbc216cf.jpg", "http://i0.hdslb.com/bfs/article/f9321b20c7cf75c1271dd992a8a01c84dbc216cf.jpg"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const index = e.currentTarget.dataset.index;
      const array = this.data.imgArr;
      wx.previewImage({
        urls: array,
        current: array[index]
      })
    }
  }
})
