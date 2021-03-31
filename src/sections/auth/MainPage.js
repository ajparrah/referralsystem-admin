import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import FormLogin from '../../components/Auth/FormLogin';

const useStyles = makeStyles({
  loginContainer: {
    backgroundColor: '#fffffe',
  },
});

const MainPage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        lg={4}
        className={classes.loginContainer}>
        <Box px={3} py={5}>
          <Box mb={2}>
            <Typography color="textPrimary" variant="h4" align="center">
              Reachyeti
            </Typography>
          </Box>
          <FormLogin />
        </Box>
      </Grid>
    </>
  );
};

export default MainPage;
