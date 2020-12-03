import { CLEAR_FAVS, FAVS_ERROR, GET_FAVS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_FAVS:
      return {
        ...state,
        favs: action.payload,
        loading: false
      };
    case FAVS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_FAVS:
      return {
        ...state,
        favs: action.payload
      };
    default:
      return state;
  }
};
