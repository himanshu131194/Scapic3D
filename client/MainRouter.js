import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './src/components/Header'
import Login from './src/components/Login'
import Signup from './src/components/Signup'
import Home from './src/components/Home'
import Verify from './src/components/Verify'
import CreateResume from './src/components/CreateResume'
import {connect} from 'react-redux'
import * as actions from './src/actions';

class MainRouter extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
      console.log(this.props);
  }
  render(){
     return(
        <Fragment>
          <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/login" component={Login}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/verify" component={Verify}/>
             <Route path="/home" component={Home}/>
             <Route path="/create-resume" component={CreateResume}/>
          </Switch>
        </Fragment>
     )
  }
}

export default connect(null, actions)(MainRouter);
