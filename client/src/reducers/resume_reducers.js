import {CREATE_RESUME} from '../actions/types';

export default function(state={resumeResponse: false}, action) {
       switch (action.type) {
         case CREATE_RESUME:
           return {resumeResponse: action.payload}
           break;
         default:
           return state;
       }
}
