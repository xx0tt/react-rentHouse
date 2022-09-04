import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import HouseCard from '../../components/HouseCard'
import { SpinLoading } from 'antd-mobile'
import { getFavoratesApi } from '../../api'

export default function Favorate() {
  // 收藏列表
  const [favorates, setFavorates] = useState([])

  // 获取收藏房屋列表
  useEffect(() => {
    getFavoratesApi().then(res => setFavorates(res.body))
  }, [])

  return (
    <div>
      <Header>收藏列表</Header>
      {favorates.length ? (
        favorates.map(item => {
          return <HouseCard key={item.houseCode} house={item} />
        })
      ) : (
        <SpinLoading className="loading" />
      )}
    </div>
  )
}
