import { useHistory } from 'react-router-dom';

function useGoToFavs() {
  const history = useHistory();

  return () => {
    history.push('/favs');
  };
}

export default useGoToFavs;
