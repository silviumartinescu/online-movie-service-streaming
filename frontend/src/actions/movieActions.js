export const fetchMoviesSuccess = (newMovies) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  payload: { newMovies },
});

export const setLoading = (isLoading) => ({
  type: 'SET_LOADING',
  payload: { isLoading },
});
