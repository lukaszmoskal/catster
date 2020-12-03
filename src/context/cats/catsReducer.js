import {
  CATS_ERROR,
  CLEAR_CATS,
  GET_CATS,
  GET_CAT_BY_ID,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CATS:
      return {
        ...state,
        cats: action.payload,
        loading: false
      };
    case GET_CAT_BY_ID:
      return {
        ...state,
        cat: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CATS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_CATS:
      return {
        ...state,
        cats: action.payload
      };
    default:
      return state;
  }
};
