import { useHistory } from 'react-router-dom';

function useGoBack() {
  const history = useHistory();

  return () => {
    history.goBack();
  };
}

export default useGoBack;
