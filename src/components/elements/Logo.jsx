import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logoImg from '../../img/cat_logo.png';

const Logo = () => {
  const useStyles = makeStyles(() => ({
    catLogo: {
      alignSelf: 'center',
      display: 'flex',
      marginRight: '25px',
      width: 'auto'
    },
    catLogo__image: {
      height: '30px',
      width: 'auto'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.catLogo}>
      <img src={logoImg} alt="Catster" className={classes.catLogo__image} />
    </div>
  );
};

export default Logo;
