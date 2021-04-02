import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

const useStyles = makeStyles({
  buttonAction: {
    display: 'flex',
    width: '100%',
  },
});

const CallsToAction = ({ message, handleClick, icon, shareableLink }) => {
  const classes = useStyles();

  return (
    <>
      <Box mb={2}>
        {shareableLink ? (
          <CopyToClipboard text={shareableLink}>
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
          </CopyToClipboard>
        ) : (
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
        )}
      </Box>
    </>
  );
};

CallsToAction.propTypes = {
  message: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.any,
  shareableLink: PropTypes.string,
};

export default CallsToAction;
