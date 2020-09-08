// components/Link/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    link: {
      type: Boolean,
      value: false
    },
    fav_nums: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // link: true,
    // fav_nums: 0,
    yesSrc: "./images/like.png",
    noSrc: "./images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLink() {
      let link = this.properties.link
      let fav_nums = this.properties.fav_nums
      this.setData({
        fav_nums: link ? fav_nums - 1 : fav_nums + 1,
        link: !link
      })
    }
  }
})