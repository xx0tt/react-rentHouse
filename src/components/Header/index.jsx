import React from 'react'
import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import './index.scss'

export default function Header(props) {
  const navigate = useNavigate()
  return (
    <div>
      <NavBar className="navbar" onBack={() => navigate(-1)}>
        {props.children}
      </NavBar>
    </div>
  )
}
