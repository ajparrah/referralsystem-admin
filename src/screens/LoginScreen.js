import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainPage from '../sections/auth/MainPage';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    backgroundColor: '#16161a',
  },
}));

const LoginScreen = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container={true}
        justify="center"
        alignItems="center"
        className={classes.container}>
        <MainPage />
      </Grid>
    </>
  );
};

export default LoginScreen;
