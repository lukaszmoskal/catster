import React from 'react';
import PropTypes from 'prop-types';
import Alerts from './layout/Alerts';
import NoCatsWarning from './elements/NoCatsWarning';
import Spinner from './elements/Spinner';

const RenderChildren = ({ error, loading, context, children }) => {
  if (error) {
    return <Alerts error={error} />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (!context || context.length === 0) {
    return <NoCatsWarning />;
  }

  return <>{children}</>;
};

RenderChildren.propTypes = {
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  context: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
};

export default RenderChildren;
