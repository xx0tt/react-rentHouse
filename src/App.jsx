import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

export default function App() {
  const Myroutes = useRoutes(routes)

  return <div>{Myroutes}</div>
}
