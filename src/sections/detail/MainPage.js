import React, { useEffect, useState } from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';
import { useHistory, useParams } from 'react-router';
import DinamicLink from '../../components/Detail/DynamicLink';
import { getLinkByNameAPI } from '../../api/pageAPI';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
});

const MainPage = () => {
  const classes = useStyles();
  const { name } = useParams();
  const history = useHistory();
  const [shareableLink, setShareableLink] = useState(null);
  useEffect(() => {
    const getShareableLink = async () => {
      try {
        const data = await getLinkByNameAPI(name);
        setShareableLink(data.shareableLink);
      } catch (error) {
        console.log('Ha ocurrido un error al tratar de abrir la pagina', error);
        history.replace('/link/404');
      }
    };
    getShareableLink();
  }, []);

  return (
    <>
      <div className={classes.content}>
        {
          (!shareableLink)
          ? (<CircularProgress color="secondary" />)
          : (<DinamicLink name={shareableLink.name} shareableLink={shareableLink.url} />)
        }
      </div>
    </>
  );
};

export default MainPage;
