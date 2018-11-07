import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import

class MainRouter extends Component{
  componentDidMount(){

  }
  render(){
     return(
        <div>
          <Switch>
             <Route path="/" component={}/>
             <Route path="/login" component={}/>
             <Route path="/signup" component={}/>
          </Switch>
        </div>
     )
  }
}

export default MainRouter;
