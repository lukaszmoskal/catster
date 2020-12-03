import React, { useContext, useEffect } from 'react';
import CatsContext from '../../context/cats/catsContext';
import GridTemplate from '../layout/GridTemplate';
import NextButton from '../elements/buttons/NextButton';
import RenderChildren from '../RenderChildren';

const Home = () => {
  const catsContext = useContext(CatsContext);
  const { error, cats, loading } = catsContext;

  useEffect(() => {
    catsContext.getCats(1);
    return () => {
      catsContext.clearCats();
    };
    // eslint-disable-next-line
  }, []);

  const Block = () => {
    return <div style={{ height: '472px', display: 'block' }}></div>;
  };

  const grid = {
    xs: 12,
    md: 6
  };

  return (
    <div className="section">
      <RenderChildren error={error} context={cats} loading={loading}>
        <GridTemplate context={cats} grid={grid} />
      </RenderChildren>
      {loading && !error && <Block />}
      {!error && <NextButton limit={1} />}
    </div>
  );
};

export default Home;
