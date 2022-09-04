import request from '../utils/request'

// 获取首页轮播图
export const getSwiperApi = () => {
  return request({
    url: '/home/swiper',
  })
}
