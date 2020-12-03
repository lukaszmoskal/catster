import React from 'react';
import PropTypes from 'prop-types';
import AddToFavsButton from './AddToFavsButton';
import RemoveFromFavsButton from './RemoveFromFavsButton';
import useIsInFavs from '../../../utils/customHooks/useIsInFavs';

const FavBtnType = ({ id }) => {
  const isInFavs = useIsInFavs(id);

  if (isInFavs) {
    return <RemoveFromFavsButton id={id} />;
  }
  return <AddToFavsButton id={id} />;
};

FavBtnType.propTypes = {
  id: PropTypes.string.isRequired
};

export default FavBtnType;
