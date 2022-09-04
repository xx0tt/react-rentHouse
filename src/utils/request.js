import axios from 'axios'
import { getUser } from './cooke'

const request = axios.create({
  baseURL: 'http://liufusong.top:8080/',
})

request.interceptors.request.use(config => {
  const token = getUser()
  if (token) config.headers.Authorization = token
  return config
})

request.interceptors.response.use(res => {
  return res.data
})

export default request
