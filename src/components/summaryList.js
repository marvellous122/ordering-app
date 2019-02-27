import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';

import CalendarIcon from '@material-ui/icons/CalendarToday';
import OrderIcon from '@material-ui/icons/Receipt';
import LocationIcon from '@material-ui/icons/LocationOn';

const styles = {};

const SummaryList = ({ classes }) => (
  <div className={classes.list}>
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <LocationIcon />
        </ListItemIcon>
        <ListItemText primary="Dine-in" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CalendarIcon />
        </ListItemIcon>
        <ListItemText primary="Booking" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Badge className={classes.margin} badgeContent={10} color="secondary">
            <OrderIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
    </List>
  </div>
);

export default withStyles(styles)(SummaryList);