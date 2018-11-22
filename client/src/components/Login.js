import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from 'material-ui/Icon'
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
      marginBottom: 5
    },
    submitlogin:{
      paddingBottom: 20,
      borderBottom: '1px solid #e3e3e3'
    },
    googlelogin:{
       '&:hover, :focus':{
         background: '#E74B37'
       },
       background: '#DD4B39'
    },
    facebooklogin:{
      '&:hover, :focus':{
         background: '#5B7BD5'
      },
      background: '#4C69BA'
    }
});

class Login extends Component{
      constructor(){
         super();
         this.state = {
            email : '',
            password: ''
         }
      }
      loginUser = (e)=>{
           const {email}= this.state;
           const {password} = this.state;
           this.props.signin({email, password}, ()=>{
              let authLoginCheck = this.props.auth.authenticated;
              if(authLoginCheck.auth){
                 auth.setLogin(authLoginCheck);
              }
           });
      }
      render(){
          const {classes} = this.props
          return(
             <Fragment>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                       Login Up
                    </Typography>
                    <TextField id="email" type="email" label="Email" className={classes.textField} onChange={(e)=>this.setState({email: e.target.value})} margin="normal"/><br/>
                    <TextField id="password" type="password" label="Password" className={classes.textField} onChange={(e)=>this.setState({password: e.target.value})} margin="normal"/>
                  </CardContent>
                  <CardActions  className={classes.submitlogin}>
                     <Button color="primary" variant="contained" onClick={this.loginUser} className={classes.submit}>Submit</Button>
                  </CardActions>
                  <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                       Or Login With -
                    </Typography>
                    <CardActions>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={24}>
                            <Grid item xs={6}>
                                <Button color="primary" variant="contained" className={classes.googlelogin}>Google</Button>
                            </Grid>
                            <Grid item xs={6} className={classes.textRight}>
                                <Button color="primary" variant="contained" className={classes.facebooklogin}>Facebook</Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                  </CardContent>
                </Card>
             </Fragment>
          )
      }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStatetoProps({auth}){
   return {auth};
}

export default connect(mapStatetoProps, actions)(withStyles(styles)(Login));
