import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { IndexBar, List } from 'antd-mobile'
import { getCityListApi, getHotCityApi } from '../../api'
import { setLocCity, getLocCity } from '../../utils/cooke'

// 获取26个大写英文字符
function get26CODE() {
  const charCodeOfA = 'A'.charCodeAt(0)
  return Array(26)
    .fill('')
    .map((_, i) => {
      return String.fromCharCode(charCodeOfA + i)
    })
}

export default function City() {
  const [citys, setCitys] = useState({})
  const [hotCitys, setHotCitys] = useState([])
  const [nowCitys, setNowCitys] = useState({})
  const navigate = useNavigate()
  const form = useRef()

  useEffect(() => {
    const obj = {}
    // 转换26个字母
    get26CODE().forEach(k => (obj[k] = []))

    // 获取当前城市
    setNowCitys(getLocCity() || {})
    // 获取热门城市
    getHotCityApi().then(res => setHotCitys(res.body))
    //   获取城市列表
    getCityListApi().then(res => {
      res.body.forEach(item => {
        obj[item.short[0].toUpperCase()].push(item)
      })
      setCitys(obj)
    })
  }, [])

  function onIndexChange(i) {
    console.log(i)
    // form.current.scrollTo('A')
  }

  // 城市被点击
  function onClickCity(detail) {
    setLocCity(detail) // 存储到本地
    navigate('/home')
  }

  return (
    <div>
      {/* 头部 */}
      <Header>城市列表</Header>

      <IndexBar ref={form} sticky onIndexChange={i => onIndexChange(i)}>
        {/* 当前城市 */}
        <IndexBar.Panel index="#" title="当前城市">
          <List>
            <List.Item>{nowCitys.label}</List.Item>
          </List>
        </IndexBar.Panel>
        {/* 热门城市 */}
        <IndexBar.Panel index="热" title="热门城市">
          <List>
            {hotCitys.map(item => {
              return (
                <List.Item key={item.value} arrow={false} onClick={() => onClickCity(item)}>
                  {item.label}
                </List.Item>
              )
            })}
          </List>
        </IndexBar.Panel>

        {/* 城市列表 */}
        {Object.keys(citys).map(keyCode => {
          return (
            citys[keyCode].length && (
              <IndexBar.Panel index={keyCode} title={keyCode} key={keyCode}>
                <List>
                  {citys[keyCode].map(item => {
                    return (
                      <List.Item arrow={false} key={item.value} onClick={() => onClickCity(item)}>
                        {item.label}
                      </List.Item>
                    )
                  })}
                </List>
              </IndexBar.Panel>
            )
          )
        })}
      </IndexBar>
    </div>
  )
}
