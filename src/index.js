import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import App from './App'
import history from './utils/history'
import './assets/iconfont/iconfont.css'
import './assets/index.scss'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
  <BrowserRouter history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
