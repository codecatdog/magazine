// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    poster: String,
    duration: String,
    mainTitle: String,
    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },
  /**组件生命周期函数 */
  attached() {
    this._getVideoInfo();
  },
  /**生命周期函数也可以放在lifetimes中,lifetimes中优先级比外面高 */
  lifetimes() {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay() {
      this._toggleVideoPostr();
      this.video.play();
    },
    onMaskTap() {
      this._toggleVideoPostr();
      this.video.seek(0); /**某些手机不会回到0秒的位置 */
      this.video.stop();
    },
    onVideoEnd() {
      this._toggleVideoPostr();
    },
    _toggleVideoPostr() {
      this.setData({
        showPoster: !this.data.showPoster
      });
    },
    _getVideoInfo() {
      const id = this.properties.videoId;
      this.video = wx.createVideoContext(id, this);
    }
  }
})
