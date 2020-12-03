import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import useAddToFavs from '../../../utils/customHooks/useAddToFavs';

const AddToFavsButton = ({ id }) => {
  const handleAddToFavs = useAddToFavs(id);

  const useStyles = makeStyles(() => ({
    addToFavs__btn: {
      backgroundColor: '#fff'
    }
  }));

  const classes = useStyles();

  return (
    <>
      <IconButton
        className={classes.addToFavs__btn}
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleAddToFavs}
      >
        <FavoriteBorderIcon color="secondary" />
      </IconButton>
    </>
  );
};

AddToFavsButton.propTypes = {
  id: PropTypes.string.isRequired
};

export default AddToFavsButton;
