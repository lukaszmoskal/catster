import { useContext } from 'react';
import FavsContext from '../../context/favs/favsContext';

function useAddToFavs(id) {
  const favsContext = useContext(FavsContext);

  return () => {
    favsContext.addToFavs(id);
  };
}

export default useAddToFavs;
