import Cookie from 'js-cookie'

const TOKEN = 'HKZF_USERINFO_TOKEN'

const CITY = 'HKZF_CITY_DETAIL'

export const getUser = () => Cookie.get(TOKEN)

export const setUser = token => Cookie.set(TOKEN, token)

export const removeuser = () => Cookie.remove(TOKEN)

export const getLocCity = () => {
  return JSON.parse(localStorage.getItem(CITY)) || { label: '北京', pinyin: 'beijing', short: 'bj', value: 'AREA|88cff55c-aaa4-e2e0' }
}

export const setLocCity = detail => {
  localStorage.setItem(CITY, JSON.stringify(detail))
}
