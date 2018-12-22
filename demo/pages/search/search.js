// 背景音乐
const innerAudioContext = wx.createInnerAudioContext()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    mp3: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',

    // 背景音乐
    bgm: false,


    imageSrc: "../../img/1.jpeg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {

  },

  // 背景音乐
  BGM: function (e) {
    let that = this;
    if (that.data.bgm) {
      that.setData({
        bgm: false,
      })
      innerAudioContext.pause(); /**  暂停音乐 */

    } else {
      that.setData({
        bgm: true,
        bgmImgAni: "bgmImgAni"
      })
      // 播放音乐
      innerAudioContext.autoplay = true
      innerAudioContext.loop = true
      innerAudioContext.src = that.data.mp3;
      innerAudioContext.play()

    }


  },



})