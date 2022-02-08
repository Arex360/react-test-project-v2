import { combineReducers } from 'redux'

import authReducer from './authReducer'
import videoReducer from './newVideo'

export default combineReducers({
	auth: authReducer,
	video: videoReducer,
})
