import { useContext } from 'react';
import FavsContext from '../../context/favs/favsContext';

function useRemoveFromFavs(id) {
  const favsContext = useContext(FavsContext);

  return () => {
    favsContext.removeFromFavs(id);
  };
}

export default useRemoveFromFavs;
