import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  const useStyles = makeStyles({
    footer: {
      alignItems: 'center',
      bottom: '0',
      display: 'flex',
      position: 'absolute',
      width: '100%'
    },
    footer__wrapper: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      margin: 'auto',
      padding: '0 24px',
      width: '100%'
    },
    footer__author: {
      opacity: '0.64'
    },
    footer__link: {
      textDecoration: 'none'
    },
    footer__btn: {
      borderRadius: '50%',
      color: 'inherit',
      height: '46px',
      padding: '12px',
      width: '46px',
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
      }
    }
  });

  const classes = useStyles();

  return (
    <BottomNavigation className={classes.footer}>
      <div className="container">
        <div className={classes.footer__wrapper}>
          <Typography variant="body2" className={classes.footer__author}>
            Created for fun by Łukasz Moskal
          </Typography>
          <a
            href="https://github.com/lukaszmoskal"
            className={classes.footer__link}
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className={classes.footer__btn} />
          </a>
        </div>
      </div>
    </BottomNavigation>
  );
};

export default Footer;
