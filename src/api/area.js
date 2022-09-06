import request from '../utils/request'

// 获取租房小组
export const getGroupsApi = areaId => {
  return request({
    url: '/home/groups',
    params: { area: areaId },
  })
}

// 获取城市列表
export const getCityListApi = () => {
  return request({
    url: '/area/city',
    params: { level: 1 },
  })
}

// 获取热门城市
export const getHotCityApi = () => {
  return request({
    url: '/area/hot',
  })
}

// 获取房源数据
export const getAreaMapApi = id => {
  return request({
    url: '/area/map',
    params: { id },
  })
}
