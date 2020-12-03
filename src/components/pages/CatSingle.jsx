import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CatsContext from '../../context/cats/catsContext';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import Spinner from '../elements/Spinner';
import FavButtonType from '../elements/buttons/FavButtonType';
import useGoBack from '../../utils/customHooks/useGoBack';

const CatSingle = ({ match }) => {
  const catsContext = useContext(CatsContext);
  const {
    getCatById,
    loading,
    cat: { breeds, categories, id, url }
  } = catsContext;

  useEffect(() => {
    getCatById(match.params.id);
    // eslint-disable-next-line
  }, []);

  const handleGoBack = useGoBack();

  const useStyles = makeStyles(() => ({
    catSingle__container: {
      paddingLeft: '26px',
      paddingRight: '26px',
      paddingTop: '36px'
    },
    root: {
      height: 'auto',
      margin: 'auto',
      maxWidth: '1000px'
    },
    catSingle__content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    catSingle__image: {
      display: 'block',
      height: 'auto',
      width: '100%'
    },
    catSingle__facts: {
      marginTop: '16px'
    },
    catSingle__actions: {
      paddingBottom: '5px',
      paddingTop: '0'
    },
    catSingle__backBtn: {
      fontSize: '1.05rem',
      marginLeft: '12px !important',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
      }
    }
  }));

  const classes = useStyles();

  if (!id) {
    return null;
  }

  if (loading) {
    return (
      <div className="section">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="section">
      <div className={classes.catSingle__container}>
        <Card className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                className={classes.catSingle__image}
                src={url}
                alt={`Cat-${id}`}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.catSingle__content}>
              <CardContent>
                <Typography component="div">
                  <Box fontSize="h5.fontSize">{`Specimen no. ${id}`}</Box>
                  <Box fontSize="h6.fontSize">{`Breed: ${
                    breeds ? breeds.map(breed => breed.name) : 'Unknown'
                  }`}</Box>
                  <Box fontSize="h6.fontSize">{`Categories: ${
                    categories
                      ? categories.map(category => category.name)
                      : 'None'
                  }`}</Box>
                  <Box
                    className={classes.catSingle__facts}
                    fontSize="p.fontSize"
                  >{`Funny facts: ${
                    breeds
                      ? breeds.map(breed => breed.description)
                      : 'There is nothing funny about this specimen'
                  }`}</Box>
                </Typography>
              </CardContent>
              <CardActions className={classes.catSingle__actions}>
                <FavButtonType id={id} />
                <Button
                  className={classes.catSingle__backBtn}
                  onClick={handleGoBack}
                  size="large"
                  color="secondary"
                  component="button"
                >
                  Back
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
};

CatSingle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CatSingle;
