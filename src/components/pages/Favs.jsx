import React, { useContext } from 'react';
import FavsContext from '../../context/favs/favsContext';
import GridTemplate from '../layout/GridTemplate';
import RenderChildren from '../RenderChildren';

const Favs = () => {
  const favsContext = useContext(FavsContext);
  const { error, favs, loading } = favsContext;

  const grid = {
    xs: 12,
    md: 6,
    xl: 4
  };

  return (
    <div className="section">
      <RenderChildren error={error} context={favs} loading={loading}>
        <GridTemplate context={favs} grid={grid} />
      </RenderChildren>
    </div>
  );
};

export default Favs;
