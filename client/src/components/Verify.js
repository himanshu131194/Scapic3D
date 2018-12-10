import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card'
import {Link} from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import Header from './Header';
import { withStyles } from '@material-ui/core/styles';

import {connect} from 'react-redux'
import * as actions  from '../actions'
import * as auth from '../auth/auth';

const styles = theme => ({
    card:{
       maxWidth: 450,
       margin: 'auto',
       marginTop: '100px',
       textAlign: 'center'
    },
    textField: {
        width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: 20
    }
});

class Verify extends Component{
      constructor(){
         super();
         this.state = {otp_entered : ''}
      }
      componentDidMount(){
        if(this.props.auth.authenticated.auth){
           this.props.history.push('/home');
        }
      }
      verifyAccount = ()=>{
          this.props.verifyOTP(this.props.auth.accountdata, this.state.otp_entered, ()=>{
            let authLoginCheck = this.props.auth.authenticated;
            if(authLoginCheck.auth){
               auth.setLogin(authLoginCheck);
               this.props.history.push('/home');
            }
          })
      }
      render(){
          const {classes} = this.props
          return(
             <Fragment>
                <Header/>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                       Verify email
                    </Typography>
                    <TextField id="otp_text" type="text" label="OTP" className={classes.textField} onChange={(e)=>this.setState({otp_entered: e.target.value})} margin="normal"/><br/>
                  </CardContent>
                  <CardActions>
                     <Button color="primary" variant="contained" onClick={this.verifyAccount} className={classes.submit}>verify</Button>
                  </CardActions>
                </Card>
             </Fragment>
          )
      }
}

Verify.propTypes = {
  classes: PropTypes.object.isRequired
}
function mapStatetoProps({auth}){
   return {auth};
}

//export default withStyles(styles)(Signup);
export default connect(mapStatetoProps, actions)(withStyles(styles)(Verify));
