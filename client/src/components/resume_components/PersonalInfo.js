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

import {connect} from 'react-redux'
import * as actions  from '../../actions'

const styles = theme =>({
      nextDetail: { display: 'flex', justifyContent: 'flex-end'},
      fillInfoCard:{
        width: "70%",
        margin: "auto"
      }
})

class PersonalInfo extends Component{
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log(event.target);
      const data = new FormData(event.target);
      for (var [key, value] of data.entries()) {
           data.append(key, value);
      }
      console.log(data);
         this.props.createResume(data, ()=>{
             console.log("created resume");
         });
    }

    // submitResumeData = (e)=>{
    //    const fromData = new FormData(e.target);
    //    e.preventDefault();
    //    this.props.createResume(fromData, ()=>{
    //        console.log("created resume");
    //    });
    // }
    render(){
         const {classes} = this.props;
         return(
            <Fragment>
                  <form onSubmit={this.handleSubmit}>
                   <label htmlFor="username">Enter username</label>
                   <input id="username" name="username" type="text" />

                   <label htmlFor="email">Enter your email</label>
                   <input id="email" name="email" type="email" />

                   <label htmlFor="birthdate">Enter your birth date</label>
                   <input id="birthdate" name="birthdate" type="text" />
                   <button>Send data!</button>
                 </form>
            </Fragment>
         )
    }
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, actions)(withStyles(styles)(PersonalInfo));
