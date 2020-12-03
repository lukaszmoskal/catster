import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia
} from '@material-ui/core';
import FavButtonType from '../elements/buttons/FavButtonType';

const CatCard = ({ cat: { id, url } }) => {
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    root: {
      height: 'auto',
      width: '100%'
    },
    catCard__image: {
      display: 'block',
      height: '400px',
      width: '100%'
    },
    catCard__actions: {
      marginLeft: '5px',
      marginTop: '-70px',
      position: 'absolute'
    }
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => history.push(`/single/${id}`)}>
        <CardMedia className={classes.catCard__image} image={url} />
      </CardActionArea>
      <CardActions className={classes.catCard__actions}>
        <FavButtonType id={id} />
      </CardActions>
    </Card>
  );
};

CatCard.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default CatCard;
