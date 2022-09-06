import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Index from '../pages/Index'
import List from '../pages/List'
import News from '../pages/News'
import Login from '../pages/Login'
import Rent from '../pages/Rent'
import Favorate from '../pages/Favorate'
import City from '../pages/City'
import Map from '../pages/Map'

export default [
  {
    path: '/home',
    element: <Home />,
    children: [
      { path: '', element: <Index /> },
      { path: 'list', element: <List /> },
      { path: 'news', element: <News /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/rent', element: <Rent /> },
  { path: '/favorate', element: <Favorate /> },
  { path: '/city', element: <City /> },
  { path: '/map', element: <Map /> },
  { path: '/', element: <Navigate to="home" /> },
]
