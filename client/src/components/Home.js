import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import * as auth from '../auth/auth';


const styles = theme => ({
    landingPage:{
      backgroundImage: "url('http://portobsb.adminbsb-themes.com/assets/images/main_bg.jpg')",
      backgroundSize: "cover",
      height: "636px"
    }
});


class Home extends Component{
      componentDidMount(){
        if(!this.props.auth.authenticated.auth){
           this.props.history.push('/login');
        }
      }
      render(){
          const {classes} = this.props;
          return(
             <div className={classes.landingPage}>

             </div>
          )
      }
}

function mapStatetoProps({auth}){
   return {auth};
}
export default connect(mapStatetoProps)(withStyles(styles)(Home));
