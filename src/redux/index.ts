//@ts-nocheck
import { combineReducers } from 'redux'
import appReducer from './reducers/app/appReducer'
import userReducer from './reducers/user/userReducer'

export default combineReducers({
  user: userReducer,
  app: appReducer,
})
