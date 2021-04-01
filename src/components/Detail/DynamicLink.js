import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import LinkIcon from '@material-ui/icons/Link';
import PropTypes from 'prop-types';
import { isAndroid, isIOS } from 'react-device-detect';
import CallsToAction from './CallsToAction';

const useStyles = makeStyles({
  textWhite: {
    color: '#fffffe',
  },
});

const DynamicLink = ({ name, shareableLink }) => {
  const classes = useStyles();
  const handleCopyShareableLink = () => {
    window.location.href = shareableLink;
  };
  const handleAndroidDownload = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.instagram.android&hl=es_419&gl=US';
  }
  const handleiOSDownload = () => {
    window.location.href = 'https://apps.apple.com/es/app/instagram/id389801252';
  }
  return (
    <>
      <Box mb={2}>
        <Typography variant="h2" align="center" className={classes.textWhite}>
          This page is for {name}
        </Typography>
      </Box>
      {
        isAndroid
        ? <CallsToAction message="Download app" handleClick={handleAndroidDownload} icon={<GetAppIcon />} />
        : isIOS
        ? <CallsToAction message="Download app" handleClick={handleiOSDownload} icon={<GetAppIcon />}  />
        : <CallsToAction message="Share" handleClick={handleCopyShareableLink} icon={<LinkIcon />}  />
      }
    </>
  );
};

DynamicLink.propTypes = {
  name: PropTypes.string.isRequired,
  shareableLink: PropTypes.string.isRequired,
};

export default DynamicLink;
