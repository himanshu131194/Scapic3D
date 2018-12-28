import {CREATE_RESUME, LIST_PRODUCTS} from '../actions/types';

export default function(state={data: []}, action) {
       switch (action.type) {
         case CREATE_RESUME:
           return {resumeResponse: action.payload}
           break;
         case LIST_PRODUCTS:
           return action.payload
           break;
         default:
           return state;
       }
}
