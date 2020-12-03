import React from 'react';
import PropTypes from 'prop-types';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import useRemoveFromFavs from '../../../utils/customHooks/useRemoveFromFavs';

const RemoveFromFavsButton = ({ id }) => {
  const handleRemoveFromFavs = useRemoveFromFavs(id);

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleRemoveFromFavs}
      >
        <FavoriteIcon color="secondary" />
      </IconButton>
    </>
  );
};

RemoveFromFavsButton.propTypes = {
  id: PropTypes.string.isRequired
};

export default RemoveFromFavsButton;
