import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

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
    display: 'flex',
    flexWrap: 'wrap',
    padding: 8
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
  formControl: {
    display: 'block',
    width: '100%'
  },
  select: {
    width: '100%'
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
  },
  addButton: {
    margin: '0 auto',
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: 'rgba(245, 0, 87, 0.7)',
    '&:hover': {
      backgroundColor: 'rgba(245, 0, 87, 0.6)',
    },
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

class ListDetail extends React.Component {
  state = {
    metaType: 'Salmon',
    addExtra: ''
  }

  handleSubmit = () => {
    this.handleModalClose();
    this.props.history.push('/lists');
  }

  handleChange = (event) => {

  }

  handleBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { classes, match } = this.props;
    const id = match.params.id;
    const object = listObjects.find(item => item.id === id);

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <img
            className={classes.media}
            src={'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg'}
            alt={''}
          />
          <div className={classes.summary}>
            <Typography variant="title" className={classes.text} gutterBottom>
              {object.title}
            </Typography>
            <Typography variant="body1" className={classes.text} color="textSecondary" gutterBottom>
              10 skier laks og kveite sashimi - 3 biter laks nigiri og kveite - 6 biter laks og kveite nigiri
            </Typography>
            <div className={classes.layout}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="meta-helper">META TYPE</InputLabel>
                <Select
                  value={this.state.metaType}
                  onChange={this.handleChange}
                  className={classes.select}
                  input={<Input name="meta" id="meta-helper" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Salmon'}>Salmon</MenuItem>
                  <MenuItem value={'Crab'}>Crab</MenuItem>
                  <MenuItem value={'Shrimp'}>Shrimp</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="extra-helper">ADD EXTRA</InputLabel>
                <Select
                  value={this.state.metaType}
                  onChange={this.handleChange}
                  className={classes.select}
                  input={<Input name="extra" id="extra-helper" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Salmon'}>Salmon</MenuItem>
                  <MenuItem value={'Crab'}>Crab</MenuItem>
                  <MenuItem value={'Shrimp'}>Shrimp</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" className={classes.addButton}>Add to table 07 cart</Button>
            </div>
          </div>
        </div>
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

export default withStyles(styles)(ListDetail);