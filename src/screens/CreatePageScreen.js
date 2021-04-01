import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dashboard from '../sections/dashboard/Dashboard';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    backgroundColor: '#16161a',
  },
}));

const CreatePageScreen = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container={true}
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Dashboard />
      </Grid>
    </>
  );
};

export default CreatePageScreen;
