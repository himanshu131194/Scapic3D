import {CREATE_RESUME, LIST_PRODUCTS} from '../actions/types';

export default function(state={resumeResponse: false}, action) {
       switch (action.type) {
         case CREATE_RESUME:
           return {resumeResponse: action.payload}
           break;
         case LIST_PRODUCTS:
           return {productResponse: action.payload}
           break;
         default:
           return state;
       }
}
