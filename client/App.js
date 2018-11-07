import React, {Component, Fragment} from 'react'
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
     axios.get('https://jsonplaceholder.typicode.com/comments')
          .then((response)=>{
              this.setState({
                 loaded : response
              })
          })
   }

   render(){
      console.log(this.state);
      return(

        <Fragment>
         <Header/>
           {this.state.loaded
            ? <div>Data</div>
            : <div>Loading</div>
            }
        </Fragment>
      )
   }
}

export default App;
