import API from './api';

export const getMovie = async (movieId) => {
  try {
    const response = await API.get(
      `movie/${movieId}?api_key=${process.env.REACT_APP_ID}`
    );

    if (!response) {
      return null;
    }

    return response;
  } catch (e) {
    console.log('We have an error in services', e);
  }
};

export const getLatest = async () => {
  try {
    const response = await API.get(
      `/movie/latest?api_key=${process.env.REACT_APP_ID}`
    );

    if (!response) {
      return null;
    }

    return response.data;
  } catch (e) {
    console.log('We have an error in services', e);
  }
};
