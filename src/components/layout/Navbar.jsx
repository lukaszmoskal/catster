import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AllFavsButton from '../elements/buttons/AllFavsButton';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Logo from '../elements/Logo';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    nav__toolbar: {
      margin: 'auto',
      width: '100%'
    },
    nav__linksWrapper: {
      display: 'flex',
      flexGrow: 1
    },
    nav__links: {
      borderRadius: '5px',
      marginRight: '16px',
      padding: '12px 12px 10px 12px',
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      [theme.breakpoints.down('sm')]: {
        marginRight: '5px'
      },
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
      }
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <div className="container">
          <Toolbar className={classes.nav__toolbar}>
            <div className={classes.nav__linksWrapper}>
              <RouterLink to="/">
                <Logo />
              </RouterLink>
              <Typography variant="h6">
                <Link
                  className={classes.nav__links}
                  color="inherit"
                  variant="button"
                  component={RouterLink}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link
                  className={classes.nav__links}
                  color="inherit"
                  variant="button"
                  component={RouterLink}
                  to="/about"
                >
                  About
                </Link>
              </Typography>
            </div>
            <AllFavsButton />
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
