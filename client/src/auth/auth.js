const isAuthenticated  = ()=>{
      let key = localStorage.getItem('login_token');
      return (key)? true: false;
}

const setLogin = ({token})=>{
      if(typeof window==='object'){
         localStorage.setItem("login_token", token);
      }
}

const unsetLogin = (callback)=>{
    localStorage.removeItem("login_token");
    callback();
}

export {
    isAuthenticated, setLogin, unsetLogin
}
