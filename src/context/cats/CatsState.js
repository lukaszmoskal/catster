import React, { useReducer } from 'react';
import { axios } from '../../utils/apiCall';
import CatsContext from './catsContext';
import CatsReducer from './catsReducer';
import {
  CATS_ERROR,
  CLEAR_CATS,
  GET_CATS,
  GET_CAT_BY_ID,
  SET_LOADING
} from '../types';

const CatsState = props => {
  const initialState = {
    cats: [],
    cat: {},
    loading: true,
    error: ''
  };

  const [state, dispatch] = useReducer(CatsReducer, initialState);

  // GET CATS FROM API
  const getCats = async (limit = 9, pages = 10, order = 'Desc') => {
    setLoading();

    try {
      const res = await axios.get(
        `/search?limit=${limit}&page=${pages}&order=${order}`
      );

      dispatch({
        type: GET_CATS,
        payload: res.data
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CATS_ERROR,
          payload: `It looks like there is some problem with TheCatsAPI. Try again later or contact API's author. Details: ${err.message}`
        });
      }
      if (err.request) {
        dispatch({
          type: CATS_ERROR,
          payload: `It looks like Catster tries to send an invalid request to TheCatsAPI. Details: ${err.message}`
        });
      }
    }
  };

  // GET CAT BY ID
  const getCatById = async id => {
    setLoading();

    try {
      const res = await axios.get(`/${id}`);

      dispatch({
        type: GET_CAT_BY_ID,
        payload: res.data
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CATS_ERROR,
          payload: `Response Error: ${err.message}`
        });
      }
      if (err.request) {
        dispatch({
          type: CATS_ERROR,
          payload: `Request Error: ${err.message}`
        });
      }
    }
  };

  // CLEAR CATS
  const clearCats = () => {
    dispatch({
      type: CLEAR_CATS,
      payload: []
    });
  };

  // SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CatsContext.Provider
      value={{
        cat: state.cat,
        cats: state.cats,
        clearCats,
        error: state.error,
        getCats,
        getCatById,
        loading: state.loading
      }}
    >
      {props.children}
    </CatsContext.Provider>
  );
};

export default CatsState;
