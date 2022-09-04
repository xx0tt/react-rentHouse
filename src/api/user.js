import request from '../utils/request'

// 用户登录接口
export const userLoginApi = data => {
  return request({
    url: '/user/login',
    method: 'POST',
    data,
  })
}

// 获取用户详情
export const getUserInfoApi = () => {
  return request({
    url: '/user',
  })
}

// 收藏列表
export const getFavoratesApi = () => {
  return request({
    url: '/user/favorites',
  })
}
