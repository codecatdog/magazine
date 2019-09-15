class Subscribe {
  setMyTagList (data) {
    wx.setStorageSync('markTagList', data)
  }
  getMyTagList () {
    return wx.getStorageSync('markTagList') || []
  }
  removeMyTag (id) {
    let myTagList = this.getMyTagList() 
    let myIndex = 0
    myTagList.forEach((item, index) => {
      if(item.tagId === id) {
        myIndex = index
        return
      }
    })
    myTagList.splice(myIndex, 1)
    this.setMyTagList(myTagList)

  }
}

export {Subscribe}