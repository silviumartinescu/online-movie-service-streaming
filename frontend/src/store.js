import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './reducers/movieReducer';

const rootReducer = combineReducers({
  movieReducer,

});

const middleware = [thunk];


const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
//export default rootReducer;



