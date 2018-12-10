import { combineReducers } from 'redux'
import authReducer  from './auth_reducers'
import resumeReducer from './resume_reducers'

const rootReducer = combineReducers({
   auth: authReducer,
   resume: resumeReducer
});

export default rootReducer;
