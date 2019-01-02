import React, {Fragment, PureComponent} from 'react';
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

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

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
    paddingTop: `${theme.spacing.unit * 8}px`,
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
     postion: 'relative',
     marginBottom: theme.spacing.unit * 2
  },
  viewproductin3d:{
     margin: 'auto'
  },
  absolute: {
    position: 'absolute'
  },
  nextprodcut:{
     color: "#fff",
     marginLeft: theme.spacing.unit * 3,
  },
  nextclick:{
    position: 'absolute',
    right: theme.spacing.unit * 13
  },
  prevclick:{
    left: theme.spacing.unit * 13,
    position: 'absolute'
  },
  loadMore:{
      textAlign: 'center',
      marginBottom: theme.spacing.unit * 5
  }
});

class ListItems extends PureComponent{
      constructor(){
         super();
         this.state = {
             loading: false,
             offset: 0,
             limit: 3
         }
      }
      componentDidMount(){
        this.props.list3DObjects(this.state.offset, this.state.limit, ()=>{
            console.log("loaded");
        });
      }
      productList = (productsCategory)=>{
         const {classes} = this.props;
         return(
           <Card key={productsCategory.name} className={classes.categorylistcard}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {productsCategory.name}
              </Typography>
               <Grid container spacing={40}>
               {productsCategory.products.map((products)=>(
                    <Grid item key={products.name} sm={6} md={4} lg={3}>
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
              <Tooltip title="Next" aria-label="Next" className={classes.absolute, classes.nextclick}>
                <Fab variant="round" color="primary">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" fill="#fff"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                </Fab>
              </Tooltip>
              <Tooltip title="Prev" aria-label="Prev" className={classes.absolute, classes.prevclick}>
                <Fab variant="round" color="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" fill="#fff"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                </Fab>
              </Tooltip>
             </Grid>
           </CardContent>
          </Card>
         )
      }
      loadMoreCategories = async ()=>{
            let offset = parseInt(this.state.offset)+3;
            await this.setState({offset});
            this.props.list3DObjects(this.state.offset, this.state.limit, ()=>{
                console.log("loaded");
            });
      }
      render(){
          const {classes} = this.props;
          console.log(this.props);
          const categories = this.props.products.data;
          return(
            <Fragment>
              <CssBaseline />
              <Header/>
              <main>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {categories.length>0 &&
                      categories.map(products =>{
                         console.log(products);
                         return this.productList(products);
                      })
                    }
                </div>
                <div className={classNames(classes.layout, classes.loadMore)}>
                  <Button variant="outlined" color="primary" onClick={this.loadMoreCategories}>
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
