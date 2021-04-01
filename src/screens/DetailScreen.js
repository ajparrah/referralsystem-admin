import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainPage from '../sections/detail/MainPage';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    backgroundColor: '#16161a',
  },
}));

const DetailScreen = () => {
  const classes = useStyles();
  return (
    <>
    <Grid
      container={true}
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <MainPage />
    </Grid>
  </>
  )
}

export default DetailScreen;
