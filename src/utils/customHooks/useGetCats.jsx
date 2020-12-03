import { useContext } from 'react';
import CatsContext from '../../context/cats/catsContext';

function useGetCats(limit) {
  const catsContext = useContext(CatsContext);

  return () => {
    catsContext.getCats(limit);
  };
}

export default useGetCats;
