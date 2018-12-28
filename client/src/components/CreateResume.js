import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import * as actions  from '../actions'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    margin: 'auto',
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  categorylistcard:{
     marginBottom: theme.spacing.unit * 2
  },
  viewproductin3d:{
     margin: 'auto'
  }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class ListItems extends Component{
      constructor(){
         super();
      }
      componentDidMount(){
        this.props.list3DObjects(()=>{
            console.log(this.props);
        });
      }
      productList = (productsCategory)=>{
         const {classes} = this.props;
         return(
           <Card className={classes.categorylistcard}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {productsCategory.name}
              </Typography>
               <Grid container spacing={40}>
               {productsCategory.models.map((products)=>(
                    <Grid item key={productsCategory.name} sm={6} md={4} lg={3}>
                     <Card className={classes.card}>
                       <CardMedia
                         className={classes.cardMedia}
                         image={products.thumb}
                         title="Image title"
                       />
                       <CardContent className={classes.cardContent}>
                         <Typography gutterBottom variant="h6" component="h2" className={classes.viewproductin3d}>
                           {products.name}
                         </Typography>
                       </CardContent>
                       <CardActions>
                         <Button color="primary" variant="contained" className={classes.viewproductin3d}>View in 3d</Button>
                       </CardActions>
                     </Card>
                    </Grid>
                ))
              }
             </Grid>
           </CardContent>
          </Card>
         )
      }
      render(){
          const {classes} = this.props;
          const {categories} = this.props.products.data;
          return(
            <Fragment>
              <CssBaseline />
              <Header/>
              <main>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {categories &&
                      categories.map(products =>{
                         return this.productList(products);
                      })
                    }
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                  <Button variant="outlined" color="primary">
                      load more categories
                  </Button>
                </div>
              </main>
              <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                  Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  Something here to give the footer a purpose!
                </Typography>
              </footer>
            </Fragment>
          )
      }
}

ListItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect((state)=>state, actions)(withStyles(styles)(ListItems));
