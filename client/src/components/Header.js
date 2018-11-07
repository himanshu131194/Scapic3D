import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    buttonLeftSpace: {
      marginLeft: 20
    },
    textRight:{
      textAlign: 'right',
      paddingRight: 20
    }
});

class Header extends Component{
      render(){
          const {classes} = this.props
          return(
            <header>
              <AppBar>
                <Toolbar>
                 <Grid container direction="row" justify="center" alignItems="center" spacing={24}>
                   <Grid item xs={6}>
                      <Typography color="inherit">
                         Resume Builder
                      </Typography>
                   </Grid>
                   <Grid item xs={6} className={classes.textRight}>
                      <Button color="primary" variant="contained" className={classes.buttonLeftSpace}>login</Button>
                      <Button color="primary" variant="contained" className={classes.buttonLeftSpace}>sign up</Button>
                   </Grid>
                 </Grid>
                </Toolbar>
              </AppBar>
            </header>
          )
      }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header);
