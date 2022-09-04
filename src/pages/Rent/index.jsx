import React from 'react'
import { Button, Empty } from 'antd-mobile'
import Header from '../../components/Header'

export default function Rent() {
  return (
    <div>
      <Header>房屋管理</Header>
      <div style={{ textAlign: 'center' }}>
        <Empty image="http://liufusong.top:8080/img/not-found.png" imageStyle={{ width: '100%', height: '100%' }} />
        <p style={{ fontSize: '18px' }}>
          您还没有房源，
          <Button color="primary" fill="none">
            去发布房源
          </Button>
          吧~
        </p>
      </div>
    </div>
  )
}
