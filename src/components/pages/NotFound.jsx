import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';

const NotFound = () => {
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    notFound__container: {
      paddingLeft: '26px',
      paddingRight: '26px',
      paddingTop: '36px'
    },
    notFound__info: {
      marginTop: '40px'
    },
    goToGalleryBtn: {
      fontSize: '22px',
      marginTop: '15px'
    }
  }));

  const classes = useStyles();

  const handleGoToGallery = () => {
    history.push('/gallery');
  };

  return (
    <div className="section">
      <div className={classes.notFound__container}>
        <Typography component={'div'}>
          <Box fontSize="h4.fontSize">
            Bummer! You scared all the cats away!
          </Box>
          <Box className={classes.notFound__info} fontSize="h5.fontSize">
            But hey, you can find some
          </Box>
          <Button
            onClick={handleGoToGallery}
            className={classes.goToGalleryBtn}
            size="small"
            variant="contained"
            color="secondary"
          >
            here
          </Button>
        </Typography>
      </div>
    </div>
  );
};

export default NotFound;
