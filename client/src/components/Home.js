import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import * as auth from '../auth/auth';


const styles = theme => ({
    landingPage:{
       position: 'relative'
    },
    coverImage:{
        width:'100%'
    },
    homeActions:{
      top: '15%',
      position: 'absolute',
      left: '10%',
      width: '50%'
    },
    homeHeading:{
        color:'#fff',
        marginBottom: '20px'
    },
    buildResumeButton:{
      marginRight: '30px'
    },
    colorHeading: {
       color: "#000"
    }
});


class Home extends Component{
      componentDidMount(){
        if(!this.props.auth.authenticated.auth){
           this.props.history.push('/login');
        }
      }
      buildResumeClick= ()=>{
        this.props.history.push('/create-resume');
      }
      render(){
          const {classes} = this.props;
          return(
            <Fragment>
             <Header/>
             <div className={classes.landingPage}>
                <img className={classes.coverImage} src="http://portobsb.adminbsb-themes.com/assets/images/main_bg.jpg"/>
                <div className={classes.homeActions}>
                    <div className={classes.homeHeading}>
                      <Typography  className={classes.colorHeading} component="h2" variant="display1">
                        Your Resume, Made Easy
                      </Typography>
                      <Typography component="h4" variant="headline" gutterBottom>
                        My Perfect Resume takes the hassle out of resume
                        writing. Easy prompts help you create the perfect
                        job-worthy resume effortlessly!
                      </Typography>
                    </div>
                    <div>
                      <Button color="primary" variant="contained" className={classes.buildResumeButton} onClick={this.buildResumeClick}>Build Resume</Button>
                      <Button color="primary" variant="contained" className={classes.facebooklogin} onClick={this.facebookLogin}>Edit and Download Sample Template</Button>
                    </div>
                </div>
             </div>
           </Fragment>
          )
      }
}

function mapStatetoProps({auth}){
   return {auth};
}
export default connect(mapStatetoProps)(withStyles(styles)(Home));
