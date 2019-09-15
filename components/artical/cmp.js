// components/artical/cmp.js
import { LikeModel } from "../../models/like.js"
const likeModel = new LikeModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },
  attached() {
    const articleDetail = this.data.articleDetail; 
    const artId = articleDetail.artId;
    const likeStatus = likeModel.getLikeStatus(artId)
    
    this.setData({
      likeStatus
    })

    // const likeList = wx.getStorageSync('likeList') || [];
    // let likeStatus = false;
    // likeList.forEach((item, index) => {
    //   if (artId === item.artId) {
    //     likeStatus = true
    //   }
    // })
    // this.setData({
    //   likeStatus
    // })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e) {
      const like = e.detail.like;
      const articleDetail = this.data.articleDetail;
      const artId = articleDetail.artId;
      const likeList = wx.getStorageSync('likeList') || [];

      if(like) {
        //缓存文章
        // likeList.unshift(articleDetail);
        // wx.setStorageSync('likeList', likeList)

        likeModel.addLikeList(articleDetail)
      }else {
        //将文章从缓存中移出
        likeModel.removeLikeList(artId)
        // let myIndex = 0;
        // likeList.forEach((item, index) => {
        //   if(artId === item.artId) {
        //     myIndex = index;
        //   }
        // })

        // likeList.splice(myIndex, 1);
        // wx.setStorageSync('likeList', likeList)
      }
    }
  }
})
