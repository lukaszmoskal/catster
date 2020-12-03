import Axios from 'axios';

export const API_URL = 'https://api.thecatapi.com/v1/images/';

export const axios = Axios.create({
  baseURL: API_URL,
  timeout: 10000
});
