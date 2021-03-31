import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RegisterMainPage from '../sections/auth/RegisterMainPage';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    backgroundColor: '#16161a',
  },
}));

const RegisterScreen = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container={true}
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <RegisterMainPage />
      </Grid>
    </>
  );
};

export default RegisterScreen;
