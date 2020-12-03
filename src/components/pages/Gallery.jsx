import React, { useContext, useEffect } from 'react';
import CatsContext from '../../context/cats/catsContext';
import NextButton from '../elements/buttons/NextButton';
import GridTemplate from '../layout/GridTemplate';
import RenderChildren from '../RenderChildren';

const Gallery = () => {
  const catsContext = useContext(CatsContext);
  const { cats, loading, error } = catsContext;

  useEffect(() => {
    catsContext.getCats();
    return () => {
      catsContext.clearCats();
    };
    // eslint-disable-next-line
  }, []);

  const grid = {
    xs: 12,
    md: 6,
    xl: 4
  };

  return (
    <div className="section">
      <RenderChildren error={error} context={cats} loading={loading}>
        <NextButton limit={9} />
        <GridTemplate context={cats} grid={grid} />
        <NextButton limit={9} />
      </RenderChildren>
    </div>
  );
};

export default Gallery;
