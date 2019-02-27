import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ClassNames from 'classnames';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import Modal from '@material-ui/core/Modal';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import ClockIcon from '@material-ui/icons/Schedule';
import AlarmIcon from '@material-ui/icons/Timer';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import OrderIcon from '@material-ui/icons/Receipt';
import LocationIcon from '@material-ui/icons/LocationOn';

const styles = theme => ({
  root: {
    margin: 'auto',
    maxWidth: 400
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    width: '100%'
  },
  summary: {
    backgroundColor: '#dc0404',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 8
  },
  text: {
    color: '#fff'
  },
  title: {
    width: '70%'
  },
  info: {
    width: '30%',
    minWidth: 50,
    textAlign: 'right'
  },
  layout: {
    paddingTop: 12,
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },
  time: {
    display: 'flex',
    alignItems: 'center',
    width: '70%'
  },
  duration: {
    width: '30%',
    minWidth: 50,
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    fontSize: 16,
    paddingRight: 8
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  input: {
    border: '1px solid gray',
    borderRadius: 3,
    width: '100%'
  },
  button: {
    float: 'right'
  }
});

class Home extends React.Component {
  state = {
    modalOpen: false,
    tableNumber: ''
  };

  handleModalOpen = () => {
    this.setState({
      modalOpen: true,
      tableNumber: ''
    });
  }

  handleModalClose = () => {
    this.setState({
      modalOpen: false,
      tableNumber: ''
    });
  }

  handleTableNumber = (event) => {
    this.setState({
      tableNumber: event.target.value
    });
  }

  handleSubmit = () => {
    this.handleModalClose();
    this.props.history.push('/lists');
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <img
            className={classes.media}
            src={'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg'}
            alt={''}
          />
          <div className={classes.summary}>
            <Typography variant="title" className={ClassNames(classes.title, classes.text)}>
              Sumo Restaurant
            </Typography>
            <Typography variant="body1" className={ClassNames(classes.info, classes.text)}>
              Info
            </Typography>
            <div className={classes.layout}>
              <Typography className={ClassNames(classes.time, classes.text)}>
                <ClockIcon className={classes.icon} /> Today 10:30 - 21:00
              </Typography>
              <Typography className={ClassNames(classes.duration, classes.text)}>
                <AlarmIcon className={classes.icon} /> 30 min
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.list}>
          <List component="nav">
            <ListItem button onClick={this.handleModalOpen}>
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
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
        >
          <div className={classes.paper}>
            <Typography variant="h5">
              Table Number
            </Typography>
            <Typography variant="caption" gutterBottom>
              Can be found in the corner of your table
            </Typography>
            <Typography variant="subtitle2">
              TABLE NUMBER
            </Typography>
            <InputBase
              className={classes.input}
              onChange={this.handleTableNumber}
            />
            <Button
              color="secondary"
              className={classes.button}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(Home);