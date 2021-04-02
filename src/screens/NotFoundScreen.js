import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
});

const NotFoundScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box mb={2}>
        <Typography variant="h2" align="center" color="textPrimary">
          404 - NOT FOUND
        </Typography>
      </Box>
    </div>
  );
};

export default NotFoundScreen;
