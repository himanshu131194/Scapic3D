import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card'
import {Link} from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Header from './Header';
import PropTypes from 'prop-types'
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

class Signup extends Component{
      constructor(){
         super();
         this.state = {
            email : '',
            password: '',
            confirmPassword: ''
         }
      }
      componentDidMount(){
        if(this.props.auth.authenticated.auth){
           this.props.history.push('/home');
        }
      }
      signupUser = ()=>{
        const {email}= this.state;
        const {password} = this.state;
        const {confirmPassword} = this.state;
        this.props.signup({email, password}, ()=>{
            this.props.history.push('/verify');
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
                       Sign Up
                    </Typography>
                    <TextField id="email" type="email" label="Email" className={classes.textField}  onChange={(e)=>this.setState({email: e.target.value})} margin="normal"/><br/>
                    <TextField id="password" type="password" label="Password" className={classes.textField} onChange={(e)=>this.setState({password: e.target.value})} margin="normal"/>
                    <TextField id="password" type="password" label="Confirm Password" className={classes.textField} onChange={(e)=>this.setState({confirmPassword: e.target.value})} margin="normal"/>
                  </CardContent>
                  <CardActions>
                     <Button color="primary" variant="contained" onClick={this.signupUser} className={classes.submit}>Submit</Button>
                  </CardActions>
                </Card>
             </Fragment>
          )
      }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStatetoProps({auth}){
   return {auth};
}

//export default withStyles(styles)(Signup);
export default connect(mapStatetoProps, actions)(withStyles(styles)(Signup));
