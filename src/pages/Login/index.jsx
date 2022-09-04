import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// 引入connect用于链接UI组件和redux
import { connect } from 'react-redux'
// 引入Action
import { userLogin, getUserInfo } from '../../redux/actions/user'

import { Form, Input, Button } from 'antd-mobile'
import Header from '../../components/Header'
import './index.scss'

function Login(props) {
  const navigate = useNavigate()

  const usernameRule = [{ required: true, message: '请输入账号' }]
  const passwordRule = [{ required: true, message: '请输入密码' }]

  const usernameRef = useRef()
  const passwordRef = useRef()

  // 校验成功
  async function submit() {
    const username = usernameRef.current.nativeElement.value
    const password = passwordRef.current.nativeElement.value

    // 发请求
    await props.userLogin({
      username,
      password,
    })
  }

  // 监听user数据
  useEffect(() => {
    if (props.user?.token) {
      props.getUserInfo()
      navigate('/home/profile')
    }
  }, [props.user])

  return (
    <div>
      <Header>账号登陆</Header>
      {/* 表单区域 */}
      <Form className="from" onFinish={submit} validateTrigger={['onBlur', 'onSubmit']}>
        <Form.Item name="username" rules={usernameRule}>
          <Input placeholder="请输入账号" ref={usernameRef} />
        </Form.Item>
        <Form.Item name="password" rules={passwordRule}>
          <Input placeholder="请输入密码" ref={passwordRef} />
        </Form.Item>
        <Button className="button" block type="submit" color="primary" size="large">
          提交
        </Button>
      </Form>
    </div>
  )
}

// 容器组件
export default connect(state => ({ user: state.user }), { userLogin, getUserInfo })(Login)
