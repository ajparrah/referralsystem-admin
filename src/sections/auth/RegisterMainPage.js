import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import FormRegister from '../../components/Auth/FormRegister';

const useStyles = makeStyles({
  registerContainer: {
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
        className={classes.registerContainer}>
        <Box px={3} py={5}>
          <Box mb={2}>
            <Typography color="textPrimary" variant="h4" align="center">
              Reachyeti
            </Typography>
          </Box>
          <FormRegister />
        </Box>
      </Grid>
    </>
  );
};

export default MainPage;
