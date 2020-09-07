// components/Link/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    fav_nums: 100,
    link: false,
    yesSrc: "./images/like.png",
    noSrc: "./images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLink() {
      this.setData({
        fav_nums: this.data.link ? this.data.fav_nums - 1 : this.data.fav_nums + 1,
        link: !this.data.link
      })
    }
  }
})