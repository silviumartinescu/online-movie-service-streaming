//
//const initialState = {
//  movieList: [],
//  isLoading: false,
//  currentPage: 1,
//};
//
//const movieReducer = (state = initialState, action) => {
//  switch (action.type) {
//    case 'FETCH_MOVIES_SUCCESS':
//      return {
//        ...state,
//        movieList: [...state.movieList, ...action.payload.newMovies],
//        currentPage: state.currentPage + 1,
//        isLoading: false,
//      };
//    case 'SET_LOADING':
//      return {
//        ...state,
//        isLoading: action.payload.isLoading,
//      };
//    default:
//      return state;
//  }
//};
//
//export default movieReducer;


// reducers/movieReducer.js


const initialState = {
  movieList: [],
  isLoading: false,
  currentPage: 1, // Initialize currentPage to 1
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movieList: [...state.movieList, ...action.payload.newMovies],
        currentPage: state.currentPage + 1, // Increment currentPage
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};

export default movieReducer;

