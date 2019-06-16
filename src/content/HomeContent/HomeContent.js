import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';

import Dashboard from '../../components/Dashboard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

import Puzzle from '../../components/Puzzle';

const styles = (theme) => ({
  emptyStateIcon: {
    fontSize: theme.spacing(12)
  },

  button: {
    marginTop: theme.spacing(1)
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  }
});

class HomeContent extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const { isSignedIn, title } = this.props;

    if (isSignedIn) {
      return (
        <Dashboard />
      );
    }

    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
      <Box my={5}>
        <Puzzle />
      </Box>
      <Container>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Container>
      </div>      
    )
  }
}

HomeContent.propTypes = {
  classes: PropTypes.object.isRequired,

  isSignedIn: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(HomeContent);