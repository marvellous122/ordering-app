import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import BackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  root: {
    margin: 'auto',
    maxWidth: 400
  },
  card: {
    display: 'flex',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    cursor: 'pointer'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  cover: {
    width: 130,
    borderRadius: '6px'
  },
  action: {
    display: 'flex'
  },

  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    margin: 'auto',
    maxWidth: 400,
    right: 'auto',
    left: 'auto'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

const listObjects = [
  {
    id: '1',
    title: 'Laks sashimi',
    description: '15 pieces of salmon, halibut',
    other: '115, -',
    image: 'https://www.lasvegas-sushi.com/wp-content/uploads/2018/04/OSAKA-Sashimi-8-845x684.jpg'
  },
  {
    id: '2',
    title: 'Laks sashimi',
    description: '15 pieces of salmon, halibut',
    other: '115, -',
    image: 'https://www.lasvegas-sushi.com/wp-content/uploads/2018/04/OSAKA-Aji1-845x684.jpg'
  },
  {
    id: '3',
    title: 'Laks sashimi',
    description: '15 pieces of salmon, halibut',
    other: '115, -',
    image: 'https://www.lasvegas-sushi.com/wp-content/uploads/2018/04/OSAKA-Aji5-845x684.jpg'
  }
]

class ListItems extends React.Component {
  handleSubmit = id => {
    this.props.history.push(`/list/${id}`);
  }

  handleBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {listObjects.map(item => (
          <Card className={classes.card} key={item.id} onClick={() => this.handleSubmit(item.id)}>
            {/* <CardActionArea onClick={() => this.handleSubmit(item.id)} className={classes.action}> */}
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {item.description}
                  </Typography>
                  <Typography component="h6" variant="h5">
                    {item.other}
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image={item.image}
                title="Live from space album cover"
              />
            {/* </CardActionArea> */}
          </Card>
        ))}
        <AppBar position="fixed" color="secondary" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleBack}>
              <BackIcon />
            </IconButton>
            <div>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(ListItems);