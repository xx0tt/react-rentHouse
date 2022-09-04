// 该文件专门用于暴露一个store对象，整个应用只有一个store

import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'

// 引入为user组件服务的reducer
import userReducer from './reducers/user'

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// redux开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'

// 合并reducer
const allReducer = combineReducers({
  user: userReducer,
})

export default legacy_createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
