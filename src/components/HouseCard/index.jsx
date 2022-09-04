import React from 'react'
import { Card, Tag } from 'antd-mobile'
import './index.scss'

export default function HouseCard(props) {
  const { house } = props
  return (
    <Card className="house-card">
      <div className="img-box">
        <img src={'http://liufusong.top:8080' + house.houseImg} alt="" />
      </div>
      <div className="text-box">
        <h3>{house.title}</h3>
        <span>{house.desc}</span>
        <br />
        {house.tags.map((tag, index) => {
          return (
            <Tag color="#e1f5f8" key={index} className="tag">
              {tag}
            </Tag>
          )
        })}
        <p>
          <span>{house.price}</span> 元/月
        </p>
      </div>
    </Card>
  )
}
