import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CatCard from './CatCard';

const GridTemplate = ({ context, grid }) => {
  const useStyles = makeStyles(theme => ({
    grid__container: {
      margin: 'auto',
      paddingBottom: '20px',
      paddingTop: '20px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '0',
        paddingRight: '0'
      },
      [theme.breakpoints.up('sm')]: {
        paddingLeft: '10px',
        paddingRight: '10px'
      }
    },
    grid__item: {
      margin: 'auto'
    }
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.grid__container}>
      {context.map(cat => (
        <Grid
          item
          xs={grid.xs}
          md={grid.md}
          xl={grid.xl}
          key={cat.id}
          className={classes.grid__item}
        >
          <CatCard cat={cat} key={cat.id} />
        </Grid>
      ))}
    </Grid>
  );
};

GridTemplate.propTypes = {
  context: PropTypes.array.isRequired,
  grid: PropTypes.shape({
    xs: PropTypes.number,
    md: PropTypes.number,
    xl: PropTypes.number
  }).isRequired
};

export default GridTemplate;
