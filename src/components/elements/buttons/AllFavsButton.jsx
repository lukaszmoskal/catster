import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import useGoToFavs from '../../../utils/customHooks/useGoToFavs';

const AllFavsButton = () => {
  const useStyles = makeStyles(() => ({
    allFavsButton: {
      marginRight: '5px'
    }
  }));

  const classes = useStyles();

  const handleGoToFavs = useGoToFavs();

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="favourites"
        className={classes.allFavsButton}
        onClick={handleGoToFavs}
      >
        <FavoriteIcon color="inherit" />
      </IconButton>
    </>
  );
};

export default AllFavsButton;
