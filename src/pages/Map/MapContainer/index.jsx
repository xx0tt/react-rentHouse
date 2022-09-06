import React, { useState, useEffect } from 'react'
import AMapLoader from '@amap/amap-jsapi-loader'
import { getAreaMapApi } from '../../../api'
import { getLocCity } from '../../../utils/cooke'
import { SpinLoading } from 'antd-mobile'
import './index.scss'

export default function MapComponent() {
  // 获取地区房源
  const nowArea = getLocCity()
  const [center, setCentet] = useState([121.43798, 31.194434]) //初始化地图中心点位置
  const [isLoading, setIsLoading] = useState(false)

  let AMap = null
  let Nmap = null
  let markerList = []

  // 初始化地图
  function initAmap() {
    return AMapLoader.load({
      key: 'deda374a28dfd588dafcfc1e74861ce6', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.ToolBar', 'AMap.Geocoder', 'AMap.Scale', 'AMap.Geolocation', 'AMap.MapType'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
  }

  // 挂载地图
  async function mountMap() {
    AMap = await initAmap()

    Nmap = new AMap.Map('container', {
      //设置地图容器id
      viewMode: '3D', //是否为3D地图模式
      zoom: 10, //初始化地图级别
      center, //初始化地图中心点位置
    })

    // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
    Nmap.addControl(new AMap.Scale({ position: 'LB' }))
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    Nmap.addControl(new AMap.ToolBar({ position: 'LT' }))
    // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
    Nmap.addControl(new AMap.Geolocation())
    // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    Nmap.addControl(new AMap.MapType())

    // 获取地区坐标
    const geocoder = new AMap.Geocoder({
      // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
      city: '全国',
    })
    geocoder.getAddress('浙江杭州', function (status, result) {
      console.log(status)
      console.log(result)
    })
  }

  // 遍历城市列表
  function getTag(areas) {
    areas.forEach(item => {
      // console.log(item)
      const marker = new AMap.Marker({
        position: [item.coord.longitude, item.coord.latitude],
        label: { content: `<div areaid=${item.value} class="area-label">${item.label}<br/>${item.count}</div>`, direction: 'center' },
      })

      markerList.push(marker)
    })
    Nmap.add(markerList)
    MarkerOnClick()
  }

  async function getHouse(id) {
    setIsLoading(true)
    const res = await getAreaMapApi(id)
    getTag(res.body)
    setIsLoading(false)
  }

  // 给所有标记绑定点击事件
  function MarkerOnClick() {
    const markers = document.querySelectorAll('.area-label')
    console.log(markers)
    markers.forEach(dom => {
      dom.addEventListener('click', function (e) {
        markerList.forEach(marker => marker.remove()) // 先移除所有标记
        markerList = []
        console.log(e.target.attributes[0].value)
        getHouse(e.target.attributes[0].value)
      })
    })
  }

  useEffect(() => {
    mountMap()
    getHouse(nowArea.value)
  }, [])

  return (
    <div>
      <div id="container" className="map" style={{ height: '620px', width: '100%' }}></div>
      {isLoading ? <SpinLoading className="loading" /> : ''}
    </div>
  )
}
