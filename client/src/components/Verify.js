import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card'
import {Link} from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

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
      render(){
          const {classes} = this.props
          return(
             <Fragment>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                       Verify email
                    </Typography>
                    <TextField id="otp_text" type="text" label="OTP" className={classes.textField}  margin="normal"/><br/>
                  </CardContent>
                  <CardActions>
                     <Button color="primary" variant="contained" className={classes.submit}>verify</Button>
                  </CardActions>
                </Card>
             </Fragment>
          )
      }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Signup);
