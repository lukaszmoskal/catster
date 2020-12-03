import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FavsContext from '../context/favs/favsContext';

const GetFavsWrapper = ({ children }) => {
  const favsContext = useContext(FavsContext);

  useEffect(() => {
    favsContext.getFavs();
    return () => {
      favsContext.clearFavs();
    };
    // eslint-disable-next-line
  }, []);
  return <>{children}</>;
};

GetFavsWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default GetFavsWrapper;
