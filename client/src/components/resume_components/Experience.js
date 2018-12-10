import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const styles = theme =>({
      nextDetail: { display: 'flex',justifyContent: 'flex-end'},
      fillInfoCard:{
        width: "70%",
        margin: "auto"
      }
})

class Experience extends Component{
    render(){
         const {classes} = this.props;
         return(
            <Fragment>
                <Card className={classes.fillInfoCard}>
                  <CardContent>
                  <Typography variant="h6" gutterBottom>
                     Experience
                  </Typography>
                  <Grid container spacing={24}>
                      <Grid item xs={12} sm={6}>
                        <TextField required id="firstName" name="firstName" label="First name"
                        fullWidth autoComplete="fname"/>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField required id="lastName" name="lastName" label="Last name"
                          fullWidth autoComplete="lname"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField required id="email" name="email" label="Email"
                          fullWidth autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField required id="phone" name="phone" label="phone"
                          fullWidth autoComplete="phone"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField required id="address" name="address" label="address"
                          fullWidth autoComplete="address"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField required id="state" name="state" label="state"
                        fullWidth autoComplete="state"/>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField required id="city" name="city" label="city"
                          fullWidth autoComplete="city"
                        />
                      </Grid>
                  </Grid>
                  </CardContent>
                  <CardActions className={classes.nextDetail}>
                       <Button color="primary" variant="contained" onClick={this.loginUser}>Next</Button>
                  </CardActions>
                </Card>
            </Fragment>
         )
    }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Experience);
