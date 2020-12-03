import React, { useReducer } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/apiCall';
import FavsContext from './favsContext';
import favsReducer from './favsReducer';
import DB from '../../db';
import { CLEAR_FAVS, FAVS_ERROR, GET_FAVS, SET_LOADING } from '../types';

const FavsState = props => {
  const initialState = {
    db: DB(),
    favs: [],
    loading: true,
    error: ''
  };

  const [state, dispatch] = useReducer(favsReducer, initialState);

  // GET ALL FAVS
  const getFavs = async preventLoading => {
    if (!preventLoading) {
      setLoading();
    }

    try {
      const favsDB = await state.db.allDocs({ include_docs: true });
      const favsIds = favsDB.rows.map(row => row.doc._id);
      const favUrls = favsIds.map(id => `${API_URL}${id}`);

      const req = await favUrls.map(url => axios.get(url));

      const res = await axios
        .all(req, {
          timeout: 10000
        })
        .then(
          axios.spread((...responses) => {
            const favs = responses.map(res => res.data);
            return favs;
          })
        );
      state.favs = res;

      dispatch({
        type: GET_FAVS,
        payload: state.favs
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: FAVS_ERROR,
          payload: `It looks like there is some problem with TheCatsAPI. Try again later or contact API's author. Details: ${err.message}`
        });
      }
      if (err.request) {
        dispatch({
          type: FAVS_ERROR,
          payload: `It looks like Catster tries to send an invalid request to TheCatsAPI. Details: ${err.message}`
        });
      }
    }
  };

  // ADD TO FAVS
  const addToFavs = async id => {
    try {
      const fav = {
        _id: id
      };
      await state.db.put(fav);
      await getFavs();
    } catch (err) {
      if (err.response) {
        dispatch({
          type: FAVS_ERROR,
          payload: `It looks like there is some problem with TheCatsAPI. Try again later or contact API's author. Details: ${err.message}`
        });
      }
      if (err.request) {
        dispatch({
          type: FAVS_ERROR,
          payload: `It looks like Catster tries to send an invalid request to TheCatsAPI. Details: ${err.message}`
        });
      }
    }
  };

  // REMOVE FROM FAVS
  const removeFromFavs = async id => {
    const { db } = state;
    try {
      const doc = await db.get(id);
      await db.remove(doc._id, doc._rev);
      await getFavs(true);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: FAVS_ERROR,
          payload: `It looks like there is some problem with TheCatsAPI. Try again later or contact API's author. Details: ${err.message}`
        });
      }
      if (err.request) {
        dispatch({
          type: FAVS_ERROR,
          payload: `It looks like Catster tries to send an invalid request to TheCatsAPI. Details: ${err.message}`
        });
      }
    }
  };

  // CLEAR FAVS
  const clearFavs = () => {
    dispatch({
      type: CLEAR_FAVS,
      payload: []
    });
  };

  // SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <FavsContext.Provider
      value={{
        addToFavs,
        clearFavs,
        db: state.db,
        error: state.error,
        favs: state.favs,
        getFavs,
        loading: state.loading,
        removeFromFavs,
        setLoading
      }}
    >
      {props.children}
    </FavsContext.Provider>
  );
};

export default FavsState;
