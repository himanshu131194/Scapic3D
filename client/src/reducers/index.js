import { combineReducers } from 'redux'
import authReducer  from './auth_reducers'
import prodcutReducer from './resume_reducers'

const rootReducer = combineReducers({
   auth: authReducer,
   products: prodcutReducer
});

export default rootReducer;
