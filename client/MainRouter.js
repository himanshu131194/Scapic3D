import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './src/components/Header'
import Login from './src/components/Login'
import Signup from './src/components/Signup'
import Home from './src/components/Home'

class MainRouter extends Component{
  componentDidMount(){

  }
  render(){
     return(
        <Fragment>
          <Header/>
          <Switch>
             <Route exact path="/login" component={Login}/>
             <Route path="/signup" component={Signup}/>
          </Switch>
        </Fragment>
     )
  }
}

export default MainRouter;
