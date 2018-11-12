import { combineReducers } from 'redux'
import authReducer  from './auth_reducers'

const rootReducer = combineReducers({
   auth: authReducer
});

export default rootReducer;
