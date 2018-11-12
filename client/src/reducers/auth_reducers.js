import {AUTH_USERS} from '../actions/types'

const INITIAL_STATE = {
   authenticated : '',
   errorMessage: ''
}

export default function(state=INITIAL_STATE, action){
    switch(action.type) {
      case AUTH_USERS:
        return {...state, authenticated: action.payload};
        break;
      case AUTH_USERS:
        return {...state, errorMessage: action.payload};
        break;
      default:
        return state;
    }
}
