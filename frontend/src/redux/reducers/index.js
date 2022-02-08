import { combineReducers } from 'redux'

import authReducer from './authReducer'
import videoReducer from './newVideo'
import userReducer from './user'
export default combineReducers({
	auth: authReducer,
	video: videoReducer,
	user: userReducer
})
