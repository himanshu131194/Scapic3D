import React, {Component, Fragment} from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import Header from './src/components/Header'
import axios from 'axios'


class App extends Component{

   constructor(){
      super();
      this.state = {
         loaded : null
      }
   }

   componentDidMount(){

   }

   render(){
      return(
        <Fragment>
         <BrowserRouter>
           <MainRouter/>
         </BrowserRouter>
        </Fragment>
      )
   }
}

export default App;
