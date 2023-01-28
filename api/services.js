import API from './api';

export const getMovie = async (movieId) => {
  try {
    const response = await API.get(
      `movie/${movieId}?api_key=cf51a46c6ac26bd4f4c55018fdad298d`
    );

    if (!response) {
      return null;
    }

    return response;
  } catch (e) {
    console.log('We have an error in services', e);
  }
};

export const getMoviesList = async (params) => {
  let response;
  const { type } = params;

  try {
    if (type === 'trending') {
      response = await API.get(
        `/trending/movie/week?api_key=cf51a46c6ac26bd4f4c55018fdad298d`
      );
    } else if (type === 'upcoming') {
      response = await API.get(
        `/movie/upcoming?api_key=cf51a46c6ac26bd4f4c55018fdad298d`
      );
    } else {
      response = await API.get(
        `/movie/${type}?api_key=cf51a46c6ac26bd4f4c55018fdad298d`
      );
    }

    if (!response) {
      return null;
    }

    return response.data;
  } catch (e) {
    console.log('We have an error in services', e);
  }
};
