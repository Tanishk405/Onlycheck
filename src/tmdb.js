import axios from 'axios';

const API_KEY = '662704c7860fefb640db978e5e9d5744';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMulti = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/multi`, {
      params: {
        api_key: API_KEY,
        query: query,
        include_adult: false,
        language: 'en-US'
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('TMDB search error:', error);
    return [];
  }
};