import React from 'react'
import { Box, Button, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
  buttonAction: {
    display: 'flex',
    width: '100%',
  },
});

const CallsToAction = ({ message, handleClick, icon }) => {
  const classes = useStyles();

  return (
    <>
      <Box mb={2}>
        <Button
          type="button"
          variant="contained"
          color="primary"
          size="large"
          className={classes.buttonAction}
          endIcon={icon}
          onClick={handleClick}
        >
          {message}
        </Button>
      </Box>
    </>
  )
}

CallsToAction.propTypes = {
  message: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.any,
};

export default CallsToAction;
