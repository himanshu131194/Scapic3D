import {AUTH_USERS, AUTH_ERROR, CREATE_USERS, LOGOUT_USERS} from '../actions/types'

const INITIAL_STATE = {
   authenticated : '',
   errorMessage: ''
}

export default function(state=INITIAL_STATE, action){
    switch(action.type) {
      case AUTH_USERS:
        return {...state, authenticated: action.payload};
        break;
      case AUTH_ERROR:
        return {...state, errorMessage: action.payload};
        break;
      case CREATE_USERS:
        return {...state, accountdata: action.payload};
        break;
      case LOGOUT_USERS:
        return {...state, authenticated: {authenticated: {auth: false}} };
        break;
      default:
        return state;
    }
}
