import React from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  textWhite: {
    color: '#fffffe',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonShare: {
    display: 'flex',
    width: '100%',
  },
});

const DynamicLink = ({ name, shareableLink }) => {
  const classes = useStyles();
  const handleCopyShareableLink = () => {
    window.location.href = shareableLink;
  };
  return (
    <>
      <Box mb={2}>
        <Typography variant="h2" align="center" className={classes.textWhite}>
          This is for {name}
        </Typography>
      </Box>
      <Box mb={2}>
        <Button
          type="button"
          variant="contained"
          color="primary"
          size="large"
          className={classes.buttonShare}
          endIcon={<LinkIcon />}
          onClick={handleCopyShareableLink}
        >
          Share
        </Button>
      </Box>
    </>
  );
};

DynamicLink.propTypes = {
  name: PropTypes.string.isRequired,
  shareableLink: PropTypes.string.isRequired,
};

export default DynamicLink;
