import { useContext, useMemo } from 'react';
import FavsContext from '../../context/favs/favsContext';

function useIsInFavs(id) {
  const favsContext = useContext(FavsContext);
  const { favs } = favsContext;

  const isInFavs = useMemo(() => {
    return favs.map(fav => fav.id).includes(id);
  }, [favs, id]);
  return isInFavs;
}

export default useIsInFavs;
