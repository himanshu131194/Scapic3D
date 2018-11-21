import {AUTH_USERS, AUTH_ERROR} from './types'
import axios from 'axios'


export const signup = ({email, password}, callback)=>{
    return async (dispatch)=>{
       try{
         const request = await axios.post('http://localhost:3000/api/signin', {
               email: email,
               password: password
         });
         console.log(request.data.data);
         dispatch({
             type: AUTH_USERS,
             payload: request.data.data
         })
         callback();
       }catch(error){
        console.log(error);
         dispatch({
             type: AUTH_ERROR,
             payload: error
         })
       }
    }
}
// export function authUsers(){
//    const url = `https://jsonplaceholder.typicode.com/comments`;
//    const response = axios.get(url);
//    return{
//       type: AUTH_USERS,
//       payload: response
//    }
// }
