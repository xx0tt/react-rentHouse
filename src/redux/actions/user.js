/* 该文件专门为user组件生成action对象 */
import { Toast } from 'antd-mobile'
import { userLoginApi, getUserInfoApi } from '../../api'
import { setUser, removeuser } from '../../utils/cooke'

// 用户登录
export const userLogin = userInfo => {
  return async dispatch => {
    const data = await userLoginApi(userInfo)
    if (data.status === 400) {
      removeuser()
      return Toast.show('您的账号或密码异常')
    }
    if (data.status === 200) {
      setUser(data.body.token)
      dispatch({ type: 'login', data: data.body })
    }
  }
}

// 获取用户详情
export const getUserInfo = () => {
  return async dispatch => {
    const data = await getUserInfoApi()
    dispatch({ type: 'userInfo', data: data.body })
  }
}

// 退出登录
export const LoginOut = () => {
  removeuser()
  return { type: 'loginOut', data: {} }
}
