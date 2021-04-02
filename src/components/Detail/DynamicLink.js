import React, { useState } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { isAndroid, isIOS } from 'react-device-detect';
import CallsToAction from './CallsToAction';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  textWhite: {
    color: '#fffffe',
  },
  modalDialog: {
    backgroundColor: '#16161a',
    color: '#fffffe'
  },
  textPrimary: {
    color: ''
  }
});

const DynamicLink = ({ name, shareableLink }) => {
  const classes = useStyles();
  const [shareableLinkCopied, setShareableLinkCopied] = useState(false);
  const history = useHistory();
  const handleHideModal = () => {
    setShareableLinkCopied(false);
  };
  const handleShowModal = () => {
    setShareableLinkCopied(true);
  };
  const handleGoToShareableLink = () => {
    handleHideModal();
    window.location.href = shareableLink;
  }
  const handleGoToCreateAnother = () => {
    handleHideModal();
    history.push('/');
  };
  const handleAndroidDownload = () => {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.instagram.android&hl=es_419&gl=US';
  };
  const handleiOSDownload = () => {
    window.location.href =
      'https://apps.apple.com/es/app/instagram/id389801252';
  };
  return (
    <>
      <Box mb={2}>
        <Typography variant="h2" align="center" className={classes.textWhite}>
          This page is for {name}
        </Typography>
      </Box>
      {isAndroid ? (
        <CallsToAction
          message="Download app"
          handleClick={handleAndroidDownload}
          icon={<GetAppIcon />}
        />
      ) : isIOS ? (
        <CallsToAction
          message="Download app"
          handleClick={handleiOSDownload}
          icon={<GetAppIcon />}
        />
      ) : (
        <CallsToAction
          message="Share"
          handleClick={handleShowModal}
          icon={<LinkIcon />}
          shareableLink={shareableLink}
        />
      )}
      <Dialog
        open={shareableLinkCopied}
        onClose={handleHideModal}
      >
        <Box className={classes.modalDialog}>
          <DialogTitle>
            Dynamic Link Copied to clipboard
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.textWhite}>
              Share with your community
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleGoToCreateAnother} color="primary">
              Create another
            </Button>
            <Button onClick={handleGoToShareableLink} color="primary" autoFocus>
              Go to link generated
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

DynamicLink.propTypes = {
  name: PropTypes.string.isRequired,
  shareableLink: PropTypes.string.isRequired,
};

export default DynamicLink;
