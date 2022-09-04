/* 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
reducer函数会接收到两个参数，分别为：之前的状态(perState) ， 动作对象(action) */

export default (perState, action) => {
  const { type, data } = action
  if (type === 'login') return data
  if (type === 'loginOut') return data
  if (type === 'userInfo') return { ...perState, ...data }

  return {}
}
