import React, { Fragment } from 'react'
import { TabBar } from 'antd-mobile'
import { TextOutline, SearchOutline, UserOutline } from 'antd-mobile-icons'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <Fragment>
      {/* 二级路由出口 */}
      <Outlet />
      {/* 底部 */}
      <TabBar className=".adm-tab-bar-footer" onChange={key => navigate(key)}>
        <TabBar.Item key="" icon={<HomeIcon />} title="首页" />
        <TabBar.Item key="list" icon={<SearchOutline />} title="找房" />
        <TabBar.Item key="news" icon={<TextOutline />} title="资讯" />
        <TabBar.Item key="profile" icon={<UserOutline />} title="我的" />
      </TabBar>
    </Fragment>
  )
}

function HomeIcon() {
  return <span className="iconfont icon-shouye"></span>
}
