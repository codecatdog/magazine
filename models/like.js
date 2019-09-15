class LikeModel {
  setLikeList(value) {
    return wx.setStorageSync('likeList', value)
  }
  //获取喜爱列表
  getLikeList() {
    return wx.getStorageSync('likeList') || []
  }
  //
  addLikeList(articleDetail) {
    const likeList = this.getLikeList()
    likeList.unshift(articleDetail)
    this.setLikeList(likeList)
  }

  removeLikeList(id) {
    const likeList = this.getLikeList()
    let myIndex = 0
    likeList.forEach((item, index) => {
      if(item.artId === id) {
        myIndex = index
        return
      }
    })

    likeList.splice(myIndex, 1)
    this.setLikeList(likeList)
  }

  getLikeStatus (artId) {
    const likeList = this.getLikeList()
    let likeStatus = false

    likeList.forEach((item, index) => {
      if(item.artId === artId) {
        likeStatus = true
      }
    })

    return likeStatus
  }
}

export {LikeModel}