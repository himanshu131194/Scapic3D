import {CREATE_RESUME, LIST_PRODUCTS} from '../actions/types';
let listOfProducts = [];
export default function(state={data: []}, action) {
       console.log(listOfProducts);
       switch (action.type) {
         case CREATE_RESUME:
           return {resumeResponse: action.payload}
           break;
         case LIST_PRODUCTS:
           listOfProducts = [...listOfProducts, ...action.payload.data];
           return {data: listOfProducts};
           break;
         default:
           return state;
       }
}
