import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Swiper, Grid } from 'antd-mobile'
import { getSwiperApi, getGroupsApi } from '../../api'
import './index.scss'
import homeImg from '../../assets/images/home.png'
import personImg from '../../assets/images/person.png'
import mapImg from '../../assets/images/map.png'
import homeKeyImg from '../../assets/images/homeKey.png'
import { getLocCity } from '../../utils/cooke'

export default function Index() {
  const [imgList, setImgList] = useState([])
  const [groups, setGroups] = useState([])
  const Nowcity = getLocCity()

  const navigate = useNavigate()

  useEffect(() => {
    // 获取轮播图
    getSwiperApi().then(res => setImgList(res.body))
    // 获取租房小组
    getGroupsApi(Nowcity.value).then(res => setGroups(res.body))
  }, [])

  return (
    <div className="home-index">
      {/* 搜索框 */}

      <div className="search-bar">
        <span className="cityName" onClick={() => navigate('/city')}>
          {Nowcity.label}
          <span className="iconfont icon-xiajiantou" />
        </span>
        <div className="My-serch">
          <span className="iconfont icon-31sousuo" />
          <p>请输入小区或地址</p>
        </div>
        {/* 地图按钮 */}
        <span className="iconfont icon-ditu" />
      </div>

      {/* 轮播图 */}
      <Swiper autoplay loop>
        {imgList.map(m => {
          return (
            <Swiper.Item key={m.id}>
              <img src={`http://liufusong.top:8080${m.imgSrc}`} alt={m.alt} />
            </Swiper.Item>
          )
        })}
      </Swiper>
      {/* item */}
      <Card>
        <Grid columns={4} gap={8}>
          <Grid.Item className="gridItem">
            <img className="gridItemImg" src={homeImg} />
            <p>整租</p>
          </Grid.Item>
          <Grid.Item className="gridItem">
            <img className="gridItemImg" src={personImg} />
            <p>合租</p>
          </Grid.Item>
          <Grid.Item className="gridItem">
            <img className="gridItemImg" src={mapImg} />
            <p>地图找房</p>
          </Grid.Item>
          <Grid.Item className="gridItem">
            <img className="gridItemImg" src={homeKeyImg} />
            <p>去出租</p>
          </Grid.Item>
        </Grid>
      </Card>
      {/* 租房小组 */}
      <div className="group">
        <div className="top">
          <h4>租房小组</h4>
          <span>更多</span>
        </div>
        <div className="bottom">
          <Grid columns={2} gap={8}>
            {groups.map(item => {
              return (
                <Grid.Item key={item.id}>
                  <Card className="card">
                    <img src={'http://liufusong.top:8080' + item.imgSrc} />
                    <div>
                      <p>{item.title}</p>
                      <p>{item.desc}</p>
                    </div>
                  </Card>
                </Grid.Item>
              )
            })}
          </Grid>
        </div>
      </div>
    </div>
  )
}
