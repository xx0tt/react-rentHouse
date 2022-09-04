import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { LoginOut, getUserInfo } from '../../redux/actions/user'

import { Button, Grid, Dialog } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import './index.scss'

function Profile(props) {
  const navigate = useNavigate()

  // DidMount 获取用户详情
  useEffect(() => {
    props.getUserInfo()
  }, [])

  // 退出
  function loginout() {
    Dialog.confirm({
      content: '是否确认退出',
      onConfirm: () => {
        props.LoginOut()
        navigate('/login')
      },
    })
  }

  // 去收藏 / 出租
  function goFavorate() {
    if (props.user.id) navigate('/favorate')
    else navigate('/login')
  }
  function goRent() {
    if (props.user.id) navigate('/rent')
    else navigate('/login')
  }

  return (
    <div className="profile-box">
      {/* 个人信息 */}
      <div className="my-title">
        <img className="bg-img" src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
        <div className="My_info">
          <div className="My_myIcon">
            <img
              src={props.user?.avatar ? 'http://liufusong.top:8080' + props.user?.avatar : 'http://liufusong.top:8080/img/profile/avatar.png'}
              alt=""
            />
          </div>
          <div className="My_user">
            <div className="My_name">{props.user?.nickname || '游客'}</div>
            <div className="My_edit">
              {props.user?.id ? (
                <Button size="mini" color="success" onClick={loginout}>
                  退出
                </Button>
              ) : (
                <Button size="mini" color="success" onClick={() => navigate('/login')}>
                  去登陆
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* 我的收藏出租 */}
      <div className="my-content">
        <Grid columns={3} gap={8} className="grid">
          <Grid.Item className="gird-item" onClick={goFavorate}>
            <div>
              <span className="iconfont icon-shoucang" />
              <p>我的收藏</p>
            </div>
          </Grid.Item>
          <Grid.Item className="gird-item" onClick={goRent}>
            <div>
              <span className="iconfont icon-shouye" />
              <p>我的出租</p>
            </div>
          </Grid.Item>
          <Grid.Item className="gird-item">
            <div>
              <span className="iconfont icon-shijian" />
              <p>看房记录</p>
            </div>
          </Grid.Item>
          <Grid.Item className="gird-item">
            <div>
              <span className="iconfont icon-kapian" />
              <p>成为房主</p>
            </div>
          </Grid.Item>
          <Grid.Item className="gird-item">
            <div>
              <span className="iconfont icon-geren" />
              <p>个人资料</p>
            </div>
          </Grid.Item>
          <Grid.Item className="gird-item">
            <div>
              <span className="iconfont icon-kefu" />
              <p>联系我们</p>
            </div>
          </Grid.Item>
        </Grid>
      </div>
      {/* 广告位 */}
      <div className="My_ad">
        <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
      </div>
    </div>
  )
}

export default connect(state => ({ user: state.user }), { LoginOut, getUserInfo })(Profile)
