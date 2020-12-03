import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const Spinner = () => {
  const useStyles = makeStyles({
    spinner: {
      position: 'absolute',
      margin: 'auto',
      maxWidth: '1600px',
      top: '300px',
      textAlign: 'center',
      width: '100%'
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
