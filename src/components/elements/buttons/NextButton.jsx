import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useGetCats from '../../../utils/customHooks/useGetCats';

const NextButton = ({ limit }) => {
  const handleGetCats = useGetCats(limit);

  return (
    <Button
      color="secondary"
      size="large"
      variant="contained"
      onClick={handleGetCats}
    >
      Next
    </Button>
  );
};

NextButton.propTypes = {
  limit: PropTypes.number
};

export default NextButton;
