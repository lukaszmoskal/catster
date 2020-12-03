import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import img from '../../img/error.jpg';

const Alerts = ({ error }) => {
  const useStyles = makeStyles(theme => ({
    alerts__container: {
      display: 'block',
      padding: '36px 26px'
    },
    alerts__info: {
      alignContent: 'center',
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
      [theme.breakpoints.up('sm')]: {
        maxWidth: '75%'
      }
    },
    alerts__icon: {
      alignSelf: 'center',
      fontSize: '2rem',
      marginRight: '8px',
      marginTop: '-1px'
    },
    alerts__figure: {
      display: 'block',
      fontFamily: 'inherit',
      margin: '50px auto 0 auto',
      maxWidth: '400px',
      width: '100%'
    },
    alerts__img: {
      borderRadius: '4px',
      height: 'auto',
      width: '100%',
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)'
    },
    alerts__caption: {
      display: 'block',
      fontSize: '.8rem',
      marginTop: '10px',
      '& a': {
        '&:hover': {
          opacity: '.6'
        }
      }
    },
    alerts__link: {
      padding: '10px'
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.alerts__container}>
      <Box className={classes.alerts__info} fontSize="h4.fontSize">
        <ErrorIcon className={classes.alerts__icon} color="secondary" />
        Attention!
        <br />
      </Box>
      <Box className={classes.alerts__info} fontSize="h5.fontSize">
        {error}
      </Box>

      <figure className={classes.alerts__figure}>
        <img className={classes.alerts__img} src={img} alt="Connection Error" />
        <figcaption className={classes.alerts__caption}>
          <a
            className={classes.alerts__link}
            href="https://www.pexels.com/photo/brown-tabby-cat-wearing-shower-cap-4587959/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            Photo by Anna Shvets from Pexels
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

Alerts.propTypes = {
  error: PropTypes.string.isRequired
};

export default Alerts;
