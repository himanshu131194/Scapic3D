import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

const changeResumeColumn = ({onSelectColumn}, count)=>{ onSelectColumn(count);}

const MainListItems = (props)=>{
    return(
      <Fragment>
      <div>
         <ListItem button onClick={()=>{ changeResumeColumn(props, 1);}}>
           <ListItemIcon>
             <DashboardIcon />
           </ListItemIcon>
           <ListItemText primary="Professional Summary" />
         </ListItem>
        <ListItem button onClick={()=>{ changeResumeColumn(props, 2);}}>
         <ListItemIcon>
           <ShoppingCartIcon />
         </ListItemIcon>
         <ListItemText primary="Personal Info" />
        </ListItem>
        <ListItem button onClick={()=>{ changeResumeColumn(props, 3);}}>
         <ListItemIcon>
           <PeopleIcon />
         </ListItemIcon>
         <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button onClick={()=>{ changeResumeColumn(props, 4);}}>
         <ListItemIcon>
           <BarChartIcon />
         </ListItemIcon>
         <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button onClick={()=>{ changeResumeColumn(props, 5);}}>
         <ListItemIcon>
           <LayersIcon />
         </ListItemIcon>
         <ListItemText primary="Projects Worked On" />
        </ListItem>
        <ListItem button onClick={()=>{ changeResumeColumn(props, 6);}}>
         <ListItemIcon>
           <AssignmentIcon />
         </ListItemIcon>
         <ListItemText primary="Educational Details" />
        </ListItem>
      </div>
      </Fragment>
    )
}

export default MainListItems;
