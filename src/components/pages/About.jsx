import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const About = () => {
  const useStyles = makeStyles(() => ({
    about__container: {
      padding: '36px 26px',
      '& a': {
        '&:hover': {
          opacity: '.6'
        }
      }
    },
    about__description: {
      padding: '30px 0'
    },
    about__link: {
      fontWeight: 'bold'
    }
  }));
  const classes = useStyles();

  return (
    <div className="section">
      <div className={classes.about__container}>
        <Typography component={'div'}>
          <Box fontSize="h4.fontSize">Oh, hello there!</Box>
          <Box className={classes.about__description}>
            I've made this little app just to teach myself how to use{' '}
            <a
              className={classes.about__link}
              href="https://reactjs.org"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              ReactJS
            </a>{' '}
            and{' '}
            <a
              className={classes.about__link}
              href="https://material-ui.com"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              Material-UI
            </a>
            .
            <br />
            All favs are stored locally in the browser, thanks to{' '}
            <a
              className={classes.about__link}
              href="https://pouchdb.com"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              pouchDB
            </a>
            .
          </Box>
          <Box>
            The Cat API:{' '}
            <a
              className={classes.about__link}
              href="https://thecatapi.com/"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              thecatapi.com
            </a>
          </Box>
          <Box>
            Cat logo by{' '}
            <a
              className={classes.about__link}
              href="https://www.vecteezy.com/free-png/cat"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              Vecteezy
            </a>
          </Box>
          <Box>
            Favicon by{' '}
            <a
              className={classes.about__link}
              href="https://www.iconarchive.com/artist/icons8.html"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              Icons8
            </a>
          </Box>
        </Typography>
      </div>
    </div>
  );
};

export default About;
