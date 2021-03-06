import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import FormCreateLink from '../../components/Dashboard/FormCreateLink';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#fffffe',
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        lg={4}
        className={classes.container}
      >
        <Box px={3} py={5}>
          <Box mb={2}>
            <Typography color="textPrimary" variant="h4" align="center">
              Reachyeti
            </Typography>
          </Box>
          <FormCreateLink />
        </Box>
      </Grid>
    </>
  );
};

export default Dashboard;
