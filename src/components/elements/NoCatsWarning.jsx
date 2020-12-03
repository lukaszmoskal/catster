import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const NoCatsWarning = () => {
  const useStyles = makeStyles(() => ({
    noCats__container: {
      margin: 'auto',
      padding: '36px 26px'
    }
  }));

  const classes = useStyles();
  return (
    <div className={classes.noCats__container}>
      <Typography>Hmm. There ain't no cats here!</Typography>
    </div>
  );
};

export default NoCatsWarning;
